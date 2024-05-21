import React from 'react'
import styled from 'styled-components'
import HomeImg from '../../images/home.jpg'
const HomeContainer = styled.div`
    height:90vh;
    width:100%;
    overflow-y:hidden;
    position:relative;
    align-items:center;
`
const Img = styled.img`
    position:absolute;
    top:0px;
    width:100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height:100%;
    }
`
const SpanTitle = styled.span `
    width:60%;
    margin:auto;
    text-align : center;
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    top:10%;
    z-index:20;
    font-size: 2.5em;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -ms-transition: all 2s ease;
    transition: all 2s ease;
    color:${({theme})=> theme.backgroundColor} !important;
 
    @media only screen and (min-width: 400px) and (max-device-width: 767px) {
      font-size: 1.7em;
      top:5%;
    }
    @media (max-width: 667px), screen and (orientation: landscape) {
      font-size: 1.3em;
      top:3%;
      width:40%;
    }
`

const Home = () => {
  return (
    <HomeContainer>
        <Img src={HomeImg} />
        <SpanTitle>Live unforgettable experiences</SpanTitle>
    </HomeContainer>
  )
}

export default Home
