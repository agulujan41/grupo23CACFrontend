import React from 'react'
import styled from 'styled-components'
import ImgPublicidad from "../../../images/info.png"
const ContainerInfo = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`;
const ImgInfo = styled.img`
  
  margin-top:60px;
  margin-bottom:60px;
  width:60%;
  object-fit:contain;
  cursor:pointer;
  animation: 2s linear 1s appear_zoom;
  border-radius: 1rem;
  @media only screen and (max-width:967px){
    width:90%;
    
  }

`;
const Info = () => {
  return (
    <ContainerInfo>
        <ImgInfo  src={ImgPublicidad} />
    </ContainerInfo>
  )
}

export default Info
