import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Project from './Project'
import projectData from './projectData.json'
import transitionTop from '../../images/projects_transition_top.svg'
import transitionBottom from '../../images/projects_transition_bottom.svg'

const Wrapper = styled.div`
  position: relative;
  height: 1100px;
  background: linear-gradient(to bottom right, #1b1b1b, #333333);
  overflow: hidden;
  padding: 100px 20px;

  @media screen and (max-width: 1000px) {
    height: 1350px;
  }

  @media screen and (max-width: 700px) {
    padding: 50px 0 0;
    height: 1650px;
  }
`

const TransitionTop = styled.img`
  width: 100vw;
  position: absolute;
  top: -1px;
  left: 0;
`

const TransitionBottom = styled.img`
  width: 100vw;
  position: absolute;
  bottom: -28px;
  left: 0;
`

const StripeBlue = styled.span`
  height: 50px;
  width: 450px;
  position: absolute;
  bottom: 100px;
  right: -100px;
  background-color: #24caf0;
  transform: rotate(-45deg);
`

const StripeYellow = styled.span`
  height: 100px;
  width: 350px;
  position: absolute;
  bottom: 20px;
  right: -100px;
  background-color: #fdc153;
  transform: rotate(-45deg);
`

const StripeRed = styled.span`
  height: 100px;
  width: 200px;
  position: absolute;
  bottom: -10px;
  right: -80px;
  background-color: #f24d47;
  transform: rotate(-45deg);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 15px;
`

const Title = styled.h3`
  position: relative;
  color: white;
  margin: 0;
  font-size: 18px;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-self: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
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
  position: absolute;
  bottom: 200px;
  max-width: 600px;
  color: white;
  margin: 0;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 0.5px;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    bottom: 175px;
    padding: 0;
  }

  @media screen and (max-width: 700px) {
    bottom: 150px;
    text-align: center;
    padding: 0 20px;
  }
`

const Projects = () => {
  const renderProjects = () => {
    return projectData.map(project => <Project project={project} />)
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
      <TransitionBottom src={transitionBottom} />
    </Wrapper>
  )
}

export default Projects
