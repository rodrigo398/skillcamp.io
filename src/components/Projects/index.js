import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Project from './Project'
import projectData from './projectData.json'
import transitionTop from '../../images/projects_transition_top.svg'
import transitionBottom from '../../images/projects_transition_bottom.svg'
import gitnotes from '../../images/gitnotes_card_logo.svg'
import skillcamp from '../../images/skillcamp_card_logo.svg'
import skillbot from '../../images/skillbot_card_logo.svg'
import code_bracket from '../../images/code_bracket.svg'

const Wrapper = styled.div`
  position: relative;
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(to bottom right, #1b1b1b, #333333);
  overflow: hidden;
  padding: 150px 30px;
  z-index: 0;

  @media screen and (min-width: 1440px) {
    height: 2050px;
    padding: 400px 20px;
  }

  @media screen and (max-width: 1000px) {
    height: 1500px;
  }

  @media screen and (max-width: 700px) {
    height: 1850px;
    padding: 150px 15px;
  }
`

const TransitionTop = styled.img`
  height: 150px;
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 5;

  margin: 0;
  max-width: none;

  @media screen and (min-width: 1440px) {
    height: 367px;
  }

  @media screen and (max-width: 700px) {
    height: 100px;
  }
`

const TransitionBottom = styled.img`
  height: 150px;
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 5;

  margin: 0;
  max-width: none;

  @media screen and (min-width: 1440px) {
    height: 367px;
  }

  @media screen and (max-width: 700px) {
    height: 100px;
  }
`

const StripeBlue = styled.span`
  position: absolute;
  height: 140px;
  width: 900px;
  bottom: 270px;
  right: -230px;
  background-color: #24caf0;
  transform: rotate(-45deg);
  z-index: 2;

  @media screen and (max-width: 700px) {
    height: 70px;
    width: 450px;
    bottom: 145px;
    right: -100px;
  }
`

const StripeYellow = styled.span`
  position: absolute;
  height: 150px;
  width: 700px;
  bottom: 200px;
  right: -225px;
  background-color: #fdc153;
  transform: rotate(-45deg);
  z-index: 2;

  @media screen and (max-width: 700px) {
    height: 70px;
    width: 350px;
    bottom: 94px;
    right: -100px;
  }
`

const StripeRed = styled.span`
  position: absolute;
  height: 180px;
  width: 600px;
  bottom: 40px;
  right: -256px;
  background-color: #f24d47;
  transform: rotate(-45deg);
  z-index: 2;

  @media screen and (max-width: 700px) {
    height: 70px;
    width: 200px;
    bottom: 48px;
    right: -80px;
  }
`

const Header = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
  }
`

const Title = styled.h3`
  position: relative;
  color: white;
  margin: 0;
  font-size: 18px;
`

const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-self: stretch;
  margin: 0 auto;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Button = styled(Link)`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  border: solid 2px #fbc15a;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 100ms;

  &:hover {
    background-color: #fbc15a;
    color: #1b1b1b;
    font-weight: 600;
  }
`

const Paragraph = styled.div`
  max-width: 600px;
  color: white;
  margin: 0;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 0.5px;
  z-index: 10;

  @media screen and (min-width: 1440px) {
    text-align: center;
    margin: 0 auto;
    max-width: 1000px;
    font-size: 30px;
  }

  @media screen and (max-width: 1000px) {
    bottom: 250px;
  }

  @media screen and (max-width: 700px) {
    bottom: 220px;
    right: 0;
    left: 0;
    text-align: center;
    margin: 0 auto;
  }
`

const CodeBracket = styled.img`
  height: 50px;
  position: absolute;
  top: ${props => props.placement.y}px;
  left: calc(${props => props.placement.x / 100} * 100vw);
  transform: rotate(${props => props.placement.a}deg);
  z-index: 1;
  animation: float 10s linear infinite;
  animation-delay: ${props => props.placement.delay}ms;

  @keyframes float {
    0% {
      transform: translateY(0) rotate(${props => props.placement.a}deg);
    }
    25% {
      transform: translateY(50px) rotate(45deg);
    }
    50% {
      transform: translateY(100px) rotate(0deg);
    }
    75% {
      transform: translateY(50px) rotate(-45deg);
    }
    100% {
      transform: translateY(0) rotate(${props => props.placement.a}deg);
    }
  }
`

const Projects = () => {
  const renderProjects = () => {
    const images = [gitnotes, skillcamp, skillbot]
    return projectData.map((project, i) => (
      <Project project={project} image={images[i]} />
    ))
  }

  const generateBackgroundPattern = (rows, columns) => {
    const c_width = 100 / (columns * 2)
    let placements = []
    for (let i = 0; i < rows; i++) {
      let n = i % 2 === 0 ? 0 : c_width / 2
      for (let j = n; j <= columns * c_width * 2; j += c_width * 2) {
        placements.push({
          x: j,
          y: i * 220 + 100 * (Math.random() - 0.5) + 50,
          a: Math.floor((Math.random() - 0.5) * 120),
          delay: Math.random() * 10000,
        })
      }
    }

    return placements.map(placement => (
      <CodeBracket src={code_bracket} placement={placement} />
    ))
  }

  return (
    <Wrapper>
      <TransitionTop src={transitionTop} />
      <Header>
        <Title>
          Our Projects
          <span />
        </Title>
        <Button to="/projects">All Projects</Button>
      </Header>
      <ProjectsContainer>{renderProjects()}</ProjectsContainer>
      <Paragraph>
        Our projects aren't just programming exercises. Come create real and
        useful products. Make a impact by contributing to some of our open
        sourced projects.
        <br /> <br />
        Do you have an idea that you want to open source? We can help you get
        your project off the ground!
      </Paragraph>
      <StripeBlue />
      <StripeYellow />
      <StripeRed />
      {generateBackgroundPattern(8, 3)}
      <TransitionBottom src={transitionBottom} />
    </Wrapper>
  )
}

export default Projects

//
