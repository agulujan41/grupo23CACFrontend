import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.backgroundColor};
    height: 5.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    position: sticky;
    top: 0;
    z-index: 100;
    @media (max-width: 60rem) {
        trasition: 0.8s all ease;
    }
    @media (max-width: 41.6875rem), screen and (orientation: landscape) {
      heigth:20vh;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 75rem;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 .375rem;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 40rem) {
      padding: 0 0rem;
  }
`;
export const Span = styled.div`
    padding: 0 .25rem;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({theme})=>theme.primaryColor}
`;

export const Img = styled.img`
    height:3.125rem;
    width : 3.125rem;
    
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 2rem;
    padding: 0 .375rem;
    list-style: none;

    @media screen and (max-width: 48rem) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primaryColor};
    }

    &.active {
      border-bottom: .125rem solid ${({ theme }) => theme.primaryColor};
    }
`;




export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 .375rem;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 48rem) {
    display: flex;
    height:6.25rem;
    align-items:center;
    justify-content:right;
    backgorund-color:yellow;
    font-size: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
    -webkit-tap-highlight-color: transparent;
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 5.625rem;
    right: 0rem;
    width:100%;
    background: ${({ theme }) => theme.backgroundColor};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    box-shadow: 0 0 .625rem 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.625rem;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.primaryColorColor};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &.active {
    border-bottom: .125rem solid ${({ theme }) => theme.primaryColor};
  }
`;

export const MobileMenuButton = styled.a`
  border: .1125rem solid ${({ theme }) => theme.primaryColor};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 1.25rem;
  
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  padding: 0 1.25rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: .9375rem;

  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &.active {
    border-bottom: .125rem solid ${({ theme }) => theme.primaryColor};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 .375rem;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 40rem) {
    padding: 0 0rem;
  }
`;
export const NavBarRightComponents = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:3.125rem;
    @media screen and (max-width: 48rem) {
      display: none;
    }
`;

export const NavbarRightButton = styled.a`
  font-size: 1em;
  font-weight:500;
  width:fit-content;
  cursor:pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0rem .375rem .75rem -0.125rem, rgba(0, 0, 0, 0.3) 0rem .1875rem .4375rem -0.1875rem;
  white-space: nowrap;
  padding: .75rem 1.50rem;
  border-radius: 3.125rem;
  text-decoration:none;
  
`;

export const SelectLanguage = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    align-items:left;
    justify-content:center;
    background-color:${({theme})=> theme.backgroundColor};
`;
export const SelectLanguageMobile = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    align-items:left;
    justify-content:center;
    margin:.9375rem;
    background-color:${({theme})=> theme.backgroundColor};

`;
export const CurrentLanguageItem = styled.div`
  display:flex;
  flex-direction:row;
  gap:.625rem;
  width:100%;
  padding:.125rem;
`;
export const LanguageIcon = styled.img`
    height:1.25rem;
    width:1.25rem;
`;
export const LanguageComboBox = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    bottom:-8.5625rem;
    left:50%;
    width:100%;
    transform: translateX(-50%);
    align-items:center;
    z-index:100; 
    
`;
export const LanguageText = styled.span`
   
`;
export const LanguageComboBoxIcon = styled.img`
    height:1.25rem;
    width:1.25rem;
`;
export const ItemLanguage = styled.div`
    display:flex;
    flex-direction:row;
    padding:.4375rem;
    background-color:${({theme})=>theme.backgroundColor};
    width:100%;
    gap:.625rem;
    &:hover{
      border:.0625rem solid gray;
      cursor:pointer;
      background-color:${({theme})=>theme.buttonSecondaryColor};
    }
`;
