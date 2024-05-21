import React from "react";
import {
  Nav,
  NavbarContainer,
  Span,
  NavLogo,
  Img,
  MobileIcon,
  MobileMenu,
  NavBarRightComponents,
  SelectLanguage,
  NavbarRightButton,
  ItemLanguage

} from "./styleNavbar";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { languages } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Img src="logo.png"/>
            <Span>G23CAC-AIR</Span>
          </a>
        </NavLogo>
        
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavBarRightComponents>
            <SelectLanguage>
              {languages.map((object,i) =>(
                  <ItemLanguage id={i}>{object?.data}</ItemLanguage>
              ))}
            </SelectLanguage>
            <NavbarRightButton href="#" style={{
                backgroundColor: theme.buttonSecondaryColor,
                color: theme.buttonPrimaryColor
            }}>
                Login in
            </NavbarRightButton>
            <NavbarRightButton href="#" style={{
                backgroundColor: theme.buttonPrimaryColor,
                color: theme.backgroundColor
            }}>
                Sign in
            </NavbarRightButton>
        </NavBarRightComponents>
    
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
        
            
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;