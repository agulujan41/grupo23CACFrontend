import React from "react";
import styled from "styled-components";
import HomeImg from "../../../images/home.jpg";
import { languages } from "../../../data/constants";
import { useGlobalState } from "../../../App";
import { useTheme } from "styled-components";

const Home = () => {
  const defaultLanguageItem = useGlobalState("defaultLanguageItem")[0];
  const theme = useTheme();
  const HomeContainer = styled.div`
    height: 90vh;
    width: 100%;
    overflow-y: hidden;
    position: relative;
    align-items: center;
  `;
  const Img = styled.img`
    position: absolute;
    top: 0px;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 1100px) {
      height: 100%;
    }
    @media screen and (max-width: 768px) {
      height: 100%;
    }
   
  `;
  const SpanTitle = styled.span`
    width: 500px;
    margin: auto;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
    font-weight: 550;
    z-index: 20;
    font-size: 2.5em;
    
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -ms-transition: all 2s ease;
    transition: all 2s ease;
    animation: linear 1s appear_left_to_right;
    
    @media screen and (max-width: 1100px) {
      top: 4%;
      font-size:2em;
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      top: 3.5%;
      font-size:1.85em;
      width: 270px;
    }
    @media screen and (max-height: 450px) {
      top: 1.5%;
      font-size:1.1em;
      width: 200px;
    }
    
    
    color: ${({ theme }) => theme.backgroundColor} !important;

  
  `;
  const SearchContainer = styled.div`
    position: absolute;
    bottom: 10%;
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
  `;
  
  const ButtonSearch = styled.a`
    text-decoration: none;
    text-size: 1.3em;
    background-color: ${({ theme }) => theme.buttonPrimaryColor};
    color: ${({ theme }) => theme.backgroundColor};
    padding: 10px 23px 10px 23px;
    border-radius:23px;
  `;
  const ContainerSearchComponent = styled.div`
    height:70px;
    background-color:${({theme})=>theme.backgroundColor};
    width:100%;
    border-radius:30px;
  `;
  return (
    <HomeContainer>
      <Img src={HomeImg} />
      <SpanTitle>
        {languages[defaultLanguageItem]?.contents.title_home}
      </SpanTitle>
      <SearchContainer>
        <ContainerSearchComponent>

        </ContainerSearchComponent>
        <ButtonSearch>
          {languages[defaultLanguageItem]?.contents.search_button}
        </ButtonSearch>
      </SearchContainer>
    </HomeContainer>
  );
};

export default Home;
