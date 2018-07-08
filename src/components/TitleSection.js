import React from 'react'
import styled from 'styled-components'
import developer from '../images/developer_blur.jpg'

const TitleSectionWrapper = styled.div`
  background: url(${developer});
  padding: 100px 20px 300px 20px;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: ' .   title';
  @media screen and (max-width: 600px) {
    padding: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const TitleSection = styled.div`
  grid-area: title;
`

const Title = styled.div`
  margin-right: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  border-radius: 10px;
  padding: 40px 30px;
  font-size: 60px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: left;
  @media screen and (max-width: 600px) {
    padding: 40px 20px;
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`

const TitleContent = styled.div`
  margin-right: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  border-radius: 10px;
  padding: 20px 20px;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 600px) {
    padding: 20px;
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
