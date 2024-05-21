import React from 'react'
import styled from 'styled-components'
import HomeImg from '../../images/home.jpg'
const HomeContainer = styled.div`
    height:90vh;
    width:100%;
    overflow-y:hidden;
`
const Img = styled.img`
    width:100%;
    object-fit: cover;
`
const Home = () => {
  return (
    <HomeContainer>
        <Img src={HomeImg} />
    </HomeContainer>
  )
}

export default Home
