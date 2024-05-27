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
  MobileLink,
  CurrentLanguageItem,
  LanguageIcon,
  LanguageText,
  LanguageComboBoxIcon,
  LanguageComboBox,
} from "./styleNavbar";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { languages } from "../../data/constants";
import { useGlobalState } from "../../App";
import logoImage from "../../images/logo.png";
import logoDownArrow from "../../images/Icons/down-arrow.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenCBLanguage, setIsOpenCBLanguage] = React.useState(false);
  const theme = useTheme();
  const [defaultLanguageItem, setDefaultLanguageItem] = useGlobalState(
    "defaultLanguageItem"
  );
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
            <Img src={logoImage} />
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
          <SelectLanguage
            onChange={(e) => setDefaultLanguageItem(parseInt(e.target.value))}
          >
            <CurrentLanguageItem
              onClick={() => setIsOpenCBLanguage(!isOpenCBLanguage)}
            >
              <LanguageIcon
                src={require(`../../images/languages/${languages[defaultLanguageItem]?.url_pic}`)}
              ></LanguageIcon>
              <LanguageText>
                {languages[defaultLanguageItem]?.data}
              </LanguageText>
              <LanguageComboBoxIcon src={logoDownArrow}></LanguageComboBoxIcon>
            </CurrentLanguageItem>
            {isOpenCBLanguage && (
              <LanguageComboBox>
                {languages.map((object, i) => (
                  <ItemLanguage
                    value={i}
                    onClick={() => {
                      setIsOpenCBLanguage(!isOpenCBLanguage);
                      setDefaultLanguageItem(i);
                    }}
                  >
                    <LanguageIcon
                      src={require(`../../images/languages/${object?.url_pic}`)}
                    ></LanguageIcon>
                    <LanguageText>{object?.data}</LanguageText>
                  </ItemLanguage>
                ))}
              </LanguageComboBox>
            )}
          </SelectLanguage>
          <NavbarRightButton
            href="/login/"
            style={{
              backgroundColor: theme.buttonSecondaryColor,
              color: theme.buttonPrimaryColor,
            }}
          >
            {languages[defaultLanguageItem]?.contents?.buttonLogin}
          </NavbarRightButton>
          <NavbarRightButton
            href="/sign_in/"
            style={{
              backgroundColor: theme.buttonPrimaryColor,
              color: theme.backgroundColor,
            }}
          >
            {languages[defaultLanguageItem]?.contents?.buttonSignIn}
          </NavbarRightButton>
        </NavBarRightComponents>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="/login/"
              onClick={() => {
                setIsOpen(!isOpen);
                setIsOpenCBLanguage(false);
              }}
            >
              {languages[defaultLanguageItem]?.contents?.buttonLogin}
            </MobileLink>

            <MobileLink
              href="/sign_in/"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {languages[defaultLanguageItem]?.contents?.buttonSignIn}
            </MobileLink>
            <SelectLanguageMobile
              onChange={(e) => setDefaultLanguageItem(parseInt(e.target.value))}
            >
              <CurrentLanguageItem
                onClick={() => setIsOpenCBLanguage(!isOpenCBLanguage)}
              >
                <LanguageIcon
                  src={require(`../../images/languages/${languages[defaultLanguageItem]?.url_pic}`)}
                ></LanguageIcon>
                <LanguageText>
                  {languages[defaultLanguageItem]?.data}
                </LanguageText>
                <LanguageComboBoxIcon
                  src={logoDownArrow}
                ></LanguageComboBoxIcon>
              </CurrentLanguageItem>
              {isOpenCBLanguage && (
                <LanguageComboBox>
                  {languages.map((object, i) => (
                    <ItemLanguage
                      value={i}
                      onClick={() => {
                        setIsOpenCBLanguage(!isOpenCBLanguage);
                        setDefaultLanguageItem(i);
                      }}
                    >
                      <LanguageIcon
                        src={require(`../../images/languages/${object?.url_pic}`)}
                      ></LanguageIcon>
                      <LanguageText>{object?.data}</LanguageText>
                    </ItemLanguage>
                  ))}
                </LanguageComboBox>
              )}
            </SelectLanguageMobile>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
