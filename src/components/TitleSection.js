import React from 'react'
import styled from 'styled-components'
import transitionBottom from '../images/title_transition_bottom.svg'
import dev_network from '../images/developer_network.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  margin: -1px auto 0;
  background: linear-gradient(to right, #fda253, #fbc15a);
  min-height: 1200px;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    min-height: 1050px;
  }

  @media screen and (max-width: 1000px) {
    min-height: 900px;
  }

  @media screen and (max-width: 700px) {
    min-height: 700px;
  }

  @media screen and (max-width: 500px) {
    grid-template-areas: 'subtitle subtitle';
  }
`

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`

const TitleImage = styled.img`
  width: 1440px;
  max-width: 2000px;
  position: absolute;
  top: 180px;
  left: -30px;
  z-index: 10;
  margin: 0;
  object-fit: cover;
  transition: all 200ms ease;

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
  z-index: 9;

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

const TransitionBottom = styled.img`
  position: absolute;
  height: 830px;
  bottom: -1px;
  left: 0;
  z-index: 5;
  margin: 0;
  max-width: none;

  @media screen and (max-width: 1440px) {
    height: 630px;
  }

  @media screen and (max-width: 1280px) {
    height: 530px;
  }

  @media screen and (max-width: 1000px) {
    height: 445px;
  }

  @media screen and (max-width: 700px) {
    height: 315px;
  }

  @media screen and (max-width: 500px) {
    height: 335px;
  }
`

const StripeLight = styled.span`
  position: absolute;
  height: 200px;
  width: 1000px;
  bottom: 500px;
  right: -220px;
  background-color: #fdc55c;
  transform: rotate(-45deg);
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 200px;
    width: 600px;
    bottom: 300px;
    right: -160px;
  }
`

const StripeMed = styled.span`
  position: absolute;
  height: 200px;
  width: 1000px;
  bottom: 300px;
  right: -230px;
  background-color: #fda545;
  transform: rotate(-45deg);
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 100px;
    width: 538px;
    bottom: 309px;
    right: -160px;
  }
`

const StripeDark = styled.span`
  position: absolute;
  height: 230px;
  width: 600px;
  bottom: 210px;
  right: -250px;
  background-color: #fd9043;
  transform: rotate(-45deg);
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 200px;
    width: 400px;
    bottom: 140px;
    right: -180px;
  }
`

export default ({ titleImage }) => (
  <Wrapper>
    <Container>
      <TitleImage src={dev_network} />
      <Subtitle>
        Collaborate with developers from around the world to upgrade your skills
      </Subtitle>
    </Container>
    <TransitionBottom src={transitionBottom} />
    <StripeLight />
    <StripeMed />
    <StripeDark />
  </Wrapper>
)
