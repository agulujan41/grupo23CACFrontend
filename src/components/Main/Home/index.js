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
    top: 0rem;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 82.5rem) {
      height: 100%;
    }
    @media screen and (max-width: 68.75rem) {
      height: 100%;
    }
    @media screen and (max-width: 48rem) {
      height: 100%;
    }
  `;
  const SpanTitle = styled.span`
    width: 50rem;
    margin: auto;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
    font-weight: 550;
    z-index: 20;
    font-size: 3.5em;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -ms-transition: all 2s ease;
    transition: all 2s ease;
    animation: linear 1s appear_left_to_right;

    @media screen and (max-width: 68.75rem) {
      top: 4%;
      font-size: 3em;
      width: 30rem;
    }
    @media screen and (max-width: 48rem) {
      top: 3.5%;
      font-size: 2.5em;
      width: 25rem;
    }
    @media screen and (max-height: 28.125rem) {
      top: 1.5%;
      font-size: .2em;
      width: 10rem;
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
