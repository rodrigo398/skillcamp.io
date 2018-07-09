import React from 'react'
import styled from 'styled-components'
import mountain from '../images/mountain_1366.jpg'

const PhilosiphyWrapper = styled.div`
  height: 100vh;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    '.     .     .     .      .     '
    '.     .     title .      .     '
    'pitch pitch pitch button button';

  background: linear-gradient(
      to bottom,
      rgba(123, 189, 223, 0.8),
      rgba(123, 189, 223, 0.8)
    ),
    url(${mountain}) no-repeat bottom center;
  background-size: cover;

  border-right: solid 10px rgba(123, 189, 223, 1);
  border-left: solid 10px rgba(123, 189, 223, 1);

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'title' 'pitch' 'button';
  }
`

const Title = styled.h3`
  grid-area: title;
  align-self: flex-start;
  justify-self: center;
  display: flex;
  justify-content: center;
  color: white;
  margin: 0;
  font-size: 20px;
  position: relative;

  span {
    height: 5px;
    width: 40px;
    position: absolute;
    bottom: -10px;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 750px) {
    align-self: center;
  }
`

const Pitch = styled.p`
  max-width: 700px;
  grid-area: pitch;
  justify-self: center;
  color: white;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 100;
  letter-spacing: 0.8px;
  line-height: 30px;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    padding: 0 30px;
    text-align: center;
  }
`

const Button = styled.a`
  height: 60px;
  width: 250px;
  grid-area: button;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #ed6e35, #f12e43);
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 750px) {
    margin: 0;
  }
`

export default () => (
  <PhilosiphyWrapper>
    <Title>
      Philosophy
      <span />
    </Title>
    <Pitch>
      Everyone should have the opportunity to grow as a developer. We at skill
      camp aim to provide a platform to learn, try new roles, and collaborate
      with others. All while building meaningful and developer focused projects.
    </Pitch>
    <Button
      href="https://join.slack.com/t/skillcamp-io/shared_invite/enQtMzgxMjM5NjU1OTU4LTIzNDIzZTA3YTY0ZTY1NWVmMDUxZDllZjVmZjNiZDRiZTdhN2RhZjhhZTI5MGQxNzY1ZDlhNTAxYTlmNWRkYzA"
      target="_blank"
    >
      Join Us On Slack
    </Button>
  </PhilosiphyWrapper>
)
