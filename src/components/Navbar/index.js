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
  SelectLanguageMobile,
  NavbarRightButton,
  ItemLanguage,
  MobileLink

} from "./styleNavbar";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { languages } from "../../data/constants";
import {useGlobalState} from '../../App'
import logoImage from "../../images/logo.png"
const Navbar = () => {

const [isOpen, setIsOpen] = React.useState(false);
const theme = useTheme();
const [defaultLanguageItem,setDefaultLanguageItem] = useGlobalState("defaultLanguageItem");
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
            <Img src={logoImage}/>
            <Span>Aerofly</Span>
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
            <SelectLanguage onChange={(e)=>setDefaultLanguageItem(parseInt(e.target.value))}>
              {languages.map((object,i) =>(
        
                  <ItemLanguage value={i} style={{
                    backgroundImage: require(`../../images/languages/${object.url_pic}`)
                  }}>{object?.data}</ItemLanguage>
                  
              ))}
            </SelectLanguage>
            <NavbarRightButton href='/login/' style={{
                backgroundColor: theme.buttonSecondaryColor,
                color: theme.buttonPrimaryColor
            }}>
                {languages[defaultLanguageItem]?.contents?.buttonLogin}
            </NavbarRightButton>
            <NavbarRightButton href="/sign_in/" style={{
                backgroundColor: theme.buttonPrimaryColor,
                color: theme.backgroundColor
            }}>
                {languages[defaultLanguageItem]?.contents?.buttonSignIn}
            </NavbarRightButton>
        </NavBarRightComponents>
    
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
              
                <MobileLink href="/login/"  onClick={() => {
                setIsOpen(!isOpen);
              }}>{languages[defaultLanguageItem]?.contents?.buttonLogin}
              </MobileLink>

              <MobileLink href="/sign_in/"  onClick={() => {
                setIsOpen(!isOpen);
              }}>{languages[defaultLanguageItem]?.contents?.buttonSignIn}
              </MobileLink>
              <SelectLanguageMobile onChange={(e)=>(setDefaultLanguageItem(parseInt(e.target.value), setIsOpen(!isOpen)))}>
              {languages.map((object,i) =>(
        
                  <ItemLanguage value={i} style={{
                    backgroundImage: require(`../../images/languages/${object.url_pic}`)
                  }}>{object?.data}</ItemLanguage>
                  
              ))}
            </SelectLanguageMobile>
            
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;