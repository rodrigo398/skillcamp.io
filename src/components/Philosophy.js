import React from 'react'
import styled from 'styled-components'
import mountain from '../images/mountain.jpg'

const PhilosiphyWrapper = styled.div`
  height: 100vh;
  max-height: 800px;
  min-height: 500px;
  background: linear-gradient(
      to bottom,
      rgba(123, 189, 223, 0.8),
      rgba(123, 189, 223, 0.8)
    ),
    url(${mountain}) no-repeat bottom center;
  background-size: cover;
  display: grid;
  grid-template-areas: 'title title';
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: minmax(auto, 250px);
  grid-gap: 20px;
  align-items: center;
  justify-content: center;

  font-family: Avenir sans-serif;
  border-right: solid 10px rgba(123, 189, 223, 1);
  border-left: solid 10px rgba(123, 189, 223, 1);

  @media screen and (max-width: 750px) {
    grid-template-areas: 'title';
    grid-template-columns: 1fr;
  }
`

const Title = styled.h3`
  color: white;
  grid-area: title;
  margin: 0 auto;
  position: relative;
`

const TitleBar = styled.span`
  height: 5px;
  width: 48px;
  position: absolute;
  background-color: white;
  margin: 0 auto;
  left: 42px;
  bottom: -17px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`

const Pitch = styled.p`
  color: white;
  padding: 0 40px;
  font-size: 24px;
  letter-spacing: 0.8px;
  line-height: 30px;
  font-weight: 100;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`

const Button = styled.button`
  background-color: #ed6e35;
  color: white;
  width: 250px;
  height: 60px;
  border: none;
  border-radius: 5px;
  justify-self: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  margin-right: 8px;
`

export default () => (
  <PhilosiphyWrapper>
    <Title>
      Philosophy
      <TitleBar />
    </Title>
    <Pitch>
      Everyone should have the opportunity to grow as a developer. We at skill
      camp aim to provide a platform to learn, try new roles, and collaborate
      with others. All while building meaningful and developer focused projects.
    </Pitch>
    <Button>Join Us On Slack</Button>
  </PhilosiphyWrapper>
)
