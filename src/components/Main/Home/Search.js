import React from "react";
import { languages } from "./constants";
import { useGlobalState } from "../../../App";
import { useState } from "react";
import logoBusqueda from "../../../images/Icons/logo.png";
import styled from "styled-components";
const Search = () => {
  const defaultLanguageItem = useGlobalState("defaultLanguageItem")[0];
  const [onFocusSearch, setOnFocusSearch] = useState(false);
  const [desplegableMenuActivated,setDesplegableMenuActivated] = useState(false);
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
    cursor: pointer;
  `;
  const ContainerSearchComponent = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 30px;
    width: 100%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  const TopSearchViewContainer = styled.div`
    display: flex;
    flex-dirextion: row;
    justify-content: space-between;
    align-items: center;
  `;
  const QuestionsContainer = styled.div`
    display: flex;
    flex-dirextion: row;
    justify-content: space-around;

    gap: 10px;
  `;
  const Question = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: min-content;
    margin: 0px;
    margin: auto;
    padding: 20px 15px 20px 15px;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.secondaryColor};
    }
  `;
  const QuestionTitle = styled.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryColor};
    text-wrap: nowrap;
  `;
  const QuestionContent = styled.span`
    font-size: 0.7em;
    color: ${({ theme }) => theme.secondaryColor};
    color: gray;
    text-wrap: nowrap;
  `;
  const LineaV = styled.div`
    width: 1px;
    margin: auto;
    height: 45px;
    background-color: ${({ theme }) => theme.primaryColor};
    position: absolute;
    right: 0px;
  `;
  const ButtonIconSearch = styled.a`
    border-radius: 30px;
    padding: 10px;
    cursor: pointer;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.buttonSecondaryColor};
    color: ${({ theme }) => theme.buttonPrimaryColor};
    margin-right: 10px;
  `;
  const InputContainerDesplegable = styled.div`
    width:100%;
    position:absolute;
    height:60vh;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius:10px;
    bottom:-62vh;
    z-index:350;
  `;
  return (
    <section id="search_section">
      <SearchContainer >
        <ContainerSearchComponent>
          <TopSearchViewContainer
            onMouseOver={() => {
              setOnFocusSearch(true);
            }}
            onMouseOut={() => {
              setOnFocusSearch(false);
            }}
            
          >
            <QuestionsContainer>
              <Question
                onClick={() => {
                  window.location.href = "#search_section";
                  setDesplegableMenuActivated(true);
                }}
              >
                <QuestionTitle>
                  {languages[defaultLanguageItem]?.contents.questions_title[0]}
                </QuestionTitle>
                <QuestionContent>
                  {
                    languages[defaultLanguageItem]?.contents
                      .questions_content[0]
                  }
                </QuestionContent>
                {!onFocusSearch && <LineaV></LineaV>}
              </Question>

              <Question  onClick={() => {
                  window.location.href = "#search_section";
                  setDesplegableMenuActivated(true);
                }}>
                <QuestionTitle>
                  {languages[defaultLanguageItem]?.contents.questions_title[1]}
                </QuestionTitle>
                <QuestionContent>
                  {
                    languages[defaultLanguageItem]?.contents
                      .questions_content[1]
                  }
                </QuestionContent>
                {!onFocusSearch && <LineaV></LineaV>}
              </Question>

              <Question  onClick={() => {
                  window.location.href = "#search_section";
                  setDesplegableMenuActivated(true);
                }}>
                <QuestionTitle>
                  {languages[defaultLanguageItem]?.contents.questions_title[2]}
                </QuestionTitle>
                <QuestionContent>
                  {
                    languages[defaultLanguageItem]?.contents
                      .questions_content[2]
                  }
                </QuestionContent>
                {!onFocusSearch && <LineaV></LineaV>}
              </Question>

              <Question  onClick={() => {
                  window.location.href = "#search_section";
                  setDesplegableMenuActivated(true);
                }}>
                <QuestionTitle>
                  {languages[defaultLanguageItem]?.contents.questions_title[3]}
                </QuestionTitle>
                <QuestionContent>
                  {
                    languages[defaultLanguageItem]?.contents
                      .questions_content[3]
                  }
                </QuestionContent>
              </Question>
            </QuestionsContainer>
            <ButtonIconSearch>
              {onFocusSearch && (
                <span>
                  {languages[defaultLanguageItem]?.contents.search_button}
                </span>
              )}
              <img
                src={logoBusqueda}
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
            </ButtonIconSearch>
          </TopSearchViewContainer>
        </ContainerSearchComponent>
        {!desplegableMenuActivated && ( <ButtonSearch>
          {languages[defaultLanguageItem]?.contents.search_button}
        </ButtonSearch>)}
        {desplegableMenuActivated && (
             <InputContainerDesplegable></InputContainerDesplegable>
        ) }
       
      </SearchContainer>
    </section>
  );
};

export default Search;
