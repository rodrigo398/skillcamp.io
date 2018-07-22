import React from 'react'
import styled from 'styled-components'
import background from '../images/title_background.svg'
import dev_network from '../images/developer_network.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  margin: 0 auto;
  background: url(${background}) no-repeat;
  transition: background-size 200ms ease;
  background-size: auto 1600px;
  min-height: 1700px;
  overflow: hidden;

  @media screen and (max-width: 1920px) {
    background-size: auto 1200px;
    min-height: 1500px;
  }

  @media screen and (max-width: 1440px) {
    background-size: auto 1000px;
    min-height: 1200px;
  }

  @media screen and (max-width: 1280px) {
    background-size: auto 800px;
    min-height: 1050px;
  }

  @media screen and (max-width: 1000px) {
    background-size: auto 700px;
    min-height: 900px;
  }

  @media screen and (max-width: 700px) {
    background-size: auto 600px;
    min-height: 700px;
  }

  @media screen and (max-width: 500px) {
    background-size: auto 600px;
    grid-template-areas: 'subtitle subtitle';
  }
`

const TitleImage = styled.img`
  width: 2300px;
  max-width: 2000px;
  position: absolute;
  top: 180px;
  left: -30px;
  z-index: 10;
  margin: 0;
  object-fit: cover;
  transition: all 200ms ease;

  @media screen and (max-width: 1920px) {
    width: 1920px;
    top: 200px;
  }

  @media screen and (max-width: 1440px) {
    width: 1440px;
    top: 200px;
  }

  @media screen and (max-width: 1280px) {
    width: 1280px;
    top: 200px;
  }

  @media screen and (max-width: 1000px) {
    width: 1000px;
    top: 200px;
  }

  @media screen and (max-width: 700px) {
    width: 700px;
  }

  @media screen and (max-width: 500px) {
    left: 4%;
  }
`

const Subtitle = styled.div`
  position: absolute;
  top: 215px;
  left: 50%;
  font-size: 40px;
  line-height: 35px;
  border-radius: 10px;
  width: 600px;
  color: #222;
  text-align: left;
  transition: left 200ms ease;

  @media screen and (max-width: 1920px) {
    width: 500px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 30px;
    line-height: 25px;
    width: 500px;
    left: 700px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 27px;
    width: 400px;
    left: 550px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 24px;
    width: 350px;
    left: 400px;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    left: 270px;
  }
  @media screen and (max-width: 600px) {
    top: 75px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }
`

export default ({ titleImage }) => (
  <Wrapper>
    <TitleImage src={dev_network} />
    <Subtitle>
      Collaborate with developers from around the world to upgrade your skills
    </Subtitle>
  </Wrapper>
)

// <TitleImage src={dev_network}/>
