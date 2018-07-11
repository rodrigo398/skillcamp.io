import React from 'react'
import styled from 'styled-components'
import developer from '../images/developer_blur.jpg'
import logo from '../images/logo_alt.svg'

const Wrapper = styled.div`
  background: url(${developer});
  background-size: cover;
  height: 100vh;
  display: grid;
  justify-items: left;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    ' .   .  '
    ' . title';
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

export default () => (
  <Wrapper>
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
