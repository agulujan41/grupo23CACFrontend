import React from "react";
import styled from "styled-components";
import HomeImg from "../../../images/home.jpg";
import { languages } from "./constants";
import { useGlobalState } from "../../../App";

import "./style.css";
import Search from "./Search";
const Home = () => {
  const defaultLanguageItem = useGlobalState("defaultLanguageItem")[0];
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
    @media screen and (max-width: 1320px) {
      height: 100%;
    }
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
      font-size: 2em;
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      top: 3.5%;
      font-size: 1.85em;
      width: 270px;
    }
    @media screen and (max-height: 450px) {
      top: 1.5%;
      font-size: 1.1em;
      width: 200px;
    }

    color: ${({ theme }) => theme.backgroundColor} !important;
  `;
  
  return (
    <HomeContainer>
      <Img src={HomeImg} />
      <SpanTitle>
        {languages[defaultLanguageItem]?.contents.title_home}
      </SpanTitle>
      <Search/>
    </HomeContainer>
  );
};

export default Home;
