import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.backgroundColor};
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    @media (max-width: 960px) {
        trasition: 0.8s all ease;
    }
    @media (max-width: 667px), screen and (orientation: landscape) {
      heigth:20vh;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    color: ${({theme})=>theme.primaryColor}
`;

export const Img = styled.img`
    height:50px;
    width : 50px;
    
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
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
      border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
    }
`;




export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height:100px;
    align-items:center;
    justify-content:right;
    backgorund-color:yellow;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
    -webkit-tap-highlight-color: transparent;
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
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
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primaryColor};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.primaryColorColor};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
export const NavBarRightComponents = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:50px;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;
export const SelectLanguage = styled.select`
  background-color: ${({theme})=>theme.backgroundColor};
  border:none;
  font-size:1em;
`;
export const ItemLanguage = styled.option`
    font-size:1em;
    background-color: ${({theme})=>theme.backgroundColor};
    color: ${({theme})=>theme.primaryColor};
`;
export const NavbarRightButton = styled.a`
  font-size: 1em;
  font-weight:500;
  width:fit-content;
  cursor:pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  white-space: nowrap;
  padding: 8px 20px 8px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-decoration:none;
  
`;
