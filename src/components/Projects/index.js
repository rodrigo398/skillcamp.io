import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Project from './Project'
import projectData from './projectData.json'

const Background = styled.div`
  background: #141414;
  border-left: 10px solid #20a375;
  border-right: 10px solid #20a375;
  display: flex;
  justify-content: center;
  padding: 0 25px;

  @media screen and (max-width: 680px) {
    border: none;
    padding: 0 15px;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 15px;
`

const Title = styled.h3`
  position: relative;
  color: white;
  margin: 0;
  font-size: 18px;

  span {
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 5px;
    width: 50px;
    background-color: #20a375;
  }
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
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
  border: solid 2px white;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 100ms;

  &:hover {
    background-color: #20a375;
  }
`

const Paragraph = styled.div`
  max-width: 600px;
  color: white;
  margin: 70px 15px;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

const Projects = () => {
  const renderProjects = () => {
    return projectData.map(project => <Project project={project} />)
  }

  return (
    <Background>
      <Wrapper>
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
      </Wrapper>
    </Background>
  )
}

export default Projects
