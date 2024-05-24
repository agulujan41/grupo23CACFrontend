import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../themes/themes";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Home from "../../components/Main/Home";
import Info from "./Info";
import Posts from "./Posts";
import Footer from "../Footer";

const Main = () => {
  const Body = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  overflow-x: hidden;
`
  return (
    <ThemeProvider theme={lightMode}>
      <Navbar />
      <Body>
        <Home />
        <Info />
        <Posts />
      </Body>
      <Footer showFooterContainer={true}/>
    </ThemeProvider>
  );
};

export default Main;
