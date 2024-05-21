import React from "react";
import {
  Nav,
  NavbarContainer,
  Span,
  NavLogo,
  Img,
  MobileIcon,
  MobileMenu,

} from "./styleNavbar";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";

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
            <Span>Logo</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        
    
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
        
            
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;