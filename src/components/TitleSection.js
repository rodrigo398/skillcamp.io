import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import background from '../images/title_background.svg'
import dev_network from '../images/developer_network.svg'

const Wrapper = styled.div`
  position: relative;
  min-height: 1050px;
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  background: url(${background}) no-repeat;
  background-size: auto 800px;
  transition: background-size 200ms ease;

  overflow: hidden;

  //display: grid;
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: repeat(5, 1fr);
  //grid-template-areas: '.  .' '. subtitle';

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
  width: 1280px;
  max-width: 1440px;
  position: absolute;
  top: 180px;
  left: -30px;
  z-index: 10;

  margin: 0;
  padding: 0;
  border: 0;

  object-fit: cover;

  transition: all 200ms ease;

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
  left: 600px;
  width: 400px;
  max-width: 400px;
  border-radius: 10px;
  font-size: 27px;
  color: #222;
  text-align: left;
  transition: left 200ms ease;
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
