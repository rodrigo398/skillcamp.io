import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from '../images/logo_main.svg'

const Background = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  z-index: 0;

  .bg_image {
    height: 100vh;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  justify-items: left;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    ' .   .  '
    ' . title';
  overflow: hidden;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-areas:
      '  .  '
      ' title';
  }
`

const TitleSection = styled.div`
  grid-area: title;
  padding: 10px;
  z-index: 10;
`

const Title = styled.div`
  max-width: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 360px;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`

const Subtitle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  max-width: 400px;
  border-radius: 10px;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding: 20px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`

export default ({ titleImage }) => (
  <Wrapper>
    <Background>
      <Img
        className="bg_image"
        backgroundColor="#191919"
        sizes={titleImage.sizes}
      />
    </Background>
    <TitleSection>
      <Title>
        <img src={logo} />
      </Title>
      <Subtitle>
        An open sourced community made for developers, by developers.
      </Subtitle>
    </TitleSection>
  </Wrapper>
)
