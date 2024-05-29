import React from "react";
import styled from "styled-components";
import HomeImg from "../../../images/home.jpg";
import { languages } from "./constants";
import { useGlobalState } from "../../../App";
import logoBusqueda from "../../../images/Icons/logo.png"
import "./style.css";
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
  const SearchContainer = styled.div`
    position: absolute;
    bottom: 10%;
    
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    
  `;

  const ButtonSearch = styled.a`
    text-decoration: none;
    text-size: 1.3em;
    background-color: ${({ theme }) => theme.buttonPrimaryColor};
    color: ${({ theme }) => theme.backgroundColor};
    padding: 10px 23px 10px 23px;
    border-radius: 23px;
    cursor:pointer;
  `;
  const ContainerSearchComponent = styled.div`
   
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 30px;
    width:100%;
    
    @media screen and (max-width: 768px) {
      display: none;
    }
   
  `;
  const TopSearchViewContainer = styled.div`
   
    display:flex;
    flex-dirextion:row;
    justify-content:space-between;
    align-items:center;
  `;
  const QuestionsContainer = styled.div`
    display:flex;
    flex-dirextion:row;
    justify-content:space-around;
   
    gap:10px;
  `;
  const Question = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:min-content;
    margin:0px;
    margin:auto;
    padding:20px 15px 20px 15px;
    border-radius: 30px;
    &:hover{
      background-color:${({theme})=>theme.secondaryColor};
    }
  `;
  const QuestionTitle = styled.span`
    font-size:0.8em;
    font-weight:bold;
    color:${({theme})=>theme.primaryColor};
    text-wrap:nowrap;
  `;
  const QuestionContent = styled.span`
  font-size:0.7em;
  color:${({theme})=>theme.secondaryColor};
  color:gray;
  text-wrap:nowrap;
  `;
  const LineaV = styled.div`
    width:1px;
    margin:auto;
    height:45px;
    background-color: ${({theme})=>theme.primaryColor};
    position:absolute;
    right:0px;
  `;
  const ButtonIconSearch = styled.a`
    border-radius:50%;
    cursor:pointer;
    margin:auto;
    background-color:${({theme})=>theme.buttonSecondaryColor};
    margin-right:10px;
  `;
  return (
    <HomeContainer>
      <Img src={HomeImg} />
      <SpanTitle>
        {languages[defaultLanguageItem]?.contents.title_home}
      </SpanTitle>
      <SearchContainer>
        <ContainerSearchComponent>
         
       
          
          <TopSearchViewContainer>
              <QuestionsContainer>
                <Question>
                    <QuestionTitle>{languages[defaultLanguageItem]?.contents.questions_title[0]}</QuestionTitle>
                    <QuestionContent>{languages[defaultLanguageItem]?.contents.questions_content[0]}</QuestionContent>
                    < LineaV></LineaV>
                </Question>
               
                <Question>
                    <QuestionTitle>{languages[defaultLanguageItem]?.contents.questions_title[1]}</QuestionTitle>
                    <QuestionContent>{languages[defaultLanguageItem]?.contents.questions_content[1]}</QuestionContent>
                    < LineaV></LineaV>
                </Question>
                
                <Question>
                    <QuestionTitle>{languages[defaultLanguageItem]?.contents.questions_title[2]}</QuestionTitle>
                    <QuestionContent>{languages[defaultLanguageItem]?.contents.questions_content[2]}</QuestionContent>
                    < LineaV></LineaV>
                </Question>
                
                <Question>
                    <QuestionTitle>{languages[defaultLanguageItem]?.contents.questions_title[3]}</QuestionTitle>
                    <QuestionContent>{languages[defaultLanguageItem]?.contents.questions_content[3]}</QuestionContent>
                </Question>
              </QuestionsContainer>
              <ButtonIconSearch >
                  <img src={logoBusqueda} alt="" style={{height:"50px",width:"50px"}}/>
              </ButtonIconSearch>
          </TopSearchViewContainer>
        
        </ContainerSearchComponent>
        <ButtonSearch>
          {languages[defaultLanguageItem]?.contents.search_button}
        </ButtonSearch>
        
       
      </SearchContainer>
    </HomeContainer>
  );
};

export default Home;
