import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../themes/themes";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import PostDetailsSSFigma from "../../images/screenshootsFigma/sign in.png"
import Footer from "../Footer";
const SignIn = () => {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 100%;
    overflow-x: hidden;
  `;
  return (
    <ThemeProvider theme={lightMode}>
      <Navbar />
      <Body>
        {/*BORRAR DESDE AQUI*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pt:"30px",
            pb:"30px"
          }}
        >
          <h1 style={{ textAlign: "center" }}>SIGN IN</h1>
          <h2 style={{ textAlign: "center" }}>
            Aqui introducir sign in. Puede borrar estas etiquetas luego
          </h2>
          <h2 style={{ textAlign: "center",color:'blue' }}>
            Persona asignada: <strong style={{font:"bold"}}>SERGIO</strong> 
          </h2>
          <h2 style={{ textAlign: "center",color:'red' }}>
            Imagen de interfaz asignada:
          </h2>
          <a href="https://www.figma.com/design/c2EUwUzdSg5fOBgnmM6Oym/Untitled?node-id=0-1&t=I8KL7woD0vKKNzhe-0" target="__blank"><img  src={PostDetailsSSFigma} alt="Ver en figma"/></a>
        </div>
        {/*BORRAR HASTA AQUI*/}
      </Body>
      <Footer />
    </ThemeProvider>
  );
};

export default SignIn;
