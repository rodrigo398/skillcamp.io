import React from 'react'
import styled from 'styled-components'
import developer from '../images/developer_blur_1366.jpg'

const TitleSectionWrapper = styled.div`
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
    grid-template-columns: repeat(1, 1fr);
  }
`

const TitleSection = styled.div`
  grid-area: title;
  padding: 10px;
`

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 60px;
  color: #ffffff;
  text-align: left;
  padding: 40px 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`

const TitleContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
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
  <TitleSectionWrapper>
    <TitleSection>
      <Title>SkillCamp.io</Title>
      <TitleContent>
        An open sourced community made for developers, by developers.
      </TitleContent>
    </TitleSection>
  </TitleSectionWrapper>
)
