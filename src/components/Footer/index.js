import React from "react";
import styled from "styled-components";
import "./style.css";
import { languages } from "./constants";
import { useGlobalState } from "../../App";
const Footer = ({ showFooterContainer }) => {
  const defaultLanguageItem = useGlobalState("defaultLanguageItem")[0];
  const FooterDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  `;
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
    @media only screen and (max-width: 968px) {
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
      <FooterDiv>
        {showFooterContainer && (
          <FooterContainer>
            <H1>{languages[defaultLanguageItem]?.contents.footer_title}</H1>
            <input
              type="search"
              name=""
              id=""
              className="searchFooter"
              placeholder={
                languages[defaultLanguageItem]?.contents.footer_placeholder
              }
            ></input>
          </FooterContainer>
        )}

        <FooterContainerCopyRight>
          <ContainerFinalCR>
            <LineaH></LineaH>
            <H2>{languages[defaultLanguageItem]?.contents.footer_copyright}</H2>
          </ContainerFinalCR>
        </FooterContainerCopyRight>
      </FooterDiv>
    </>
  );
};

export default Footer;
