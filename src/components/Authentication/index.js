import React from "react";
import styled from "styled-components";
import bgAuthenticated from "../../images/authenticated-background.png";
import Login from "../Login";
import SignIn from "../SignIn";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../themes/themes";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
const Authentication = ({ type }) => {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};

    overflow-x: hidden;
  `;
  const AuthenticationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

  `;
  const AuthenticationImg = styled.img`
    width: 50%;
    height: 90vh;
    object-fit: cover;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  return (
    <ThemeProvider theme={lightMode}>
      <Navbar />
      <Body>
        <AuthenticationContainer>
          <AuthenticationImg src={bgAuthenticated}></AuthenticationImg>
          {(type==="login")?(
            <Login/>
            
          ):(
            <SignIn/>
          )
        }


        </AuthenticationContainer>
      </Body>
      <Footer showFooterContainer={false} />
    </ThemeProvider>
  );
};

export default Authentication;
