import React from "react";
import styled from "styled-components";
import "./style.css";
const Footer = ({ showFooterContainer }) => {
  const FooterContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.buttonPrimaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `;

  const FooterContainerCopyRight = styled.div`
    padding-top: 120px;

    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  `;
  const H1 = styled.h1`
    font-size: 1.6em;
    color: ${({ theme }) => theme.backgroundColor};
    text-align: center;
    @media only screen and (max-width:968px){
      font-size: 1em;
    }
  `;
  const ContainerFinalCR = styled.div`
    width: 100%;
    position: absolute;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
  `;
  const LineaH = styled.div`
    width: 90%;
    height: 1px;
    background-color: lightgray;
  `;
  const H2 = styled.h1`
    font-size: 0.6em;
    color: ${({ theme }) => theme.primaryColor};
    text-align: center;
    margin: 0% 10% 0% 10%;
  `;
  return (
    <>
      {showFooterContainer && (
        <FooterContainer>
          <H1>Suscribe our Newsletter</H1>
          <input
            type="search"
            name=""
            id=""
            className="searchFooter"
            placeholder="Enter your email"
          ></input>
        </FooterContainer>
      )}

      <FooterContainerCopyRight>
        <ContainerFinalCR>
          <LineaH></LineaH>
          <H2>
            © 2024 Aerofly. All rights reserved. All content on this website,
            including but not limited to text, images, graphics, logos, and
            code, is the property of Aerofly or its content suppliers and is
            protected by intellectual property laws.
          </H2>
        </ContainerFinalCR>
      </FooterContainerCopyRight>
    </>
  );
};

export default Footer;
