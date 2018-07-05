import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Project from './Project'
import projectData from './projectData.json'

const ProjectsBackground = styled.div`
  min-height: 100vh;
  background: #141414;
  border-left: 10px solid #20a375;
  border-right: 10px solid #20a375;
  display: flex;
  justify-content: center;
`

const ProjectsWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProjectsHeader = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 12px 30px 12px;
`

const ProjectsTitle = styled.h3`
  color: white;
  font-size: 18px;
  margin: 0;
  position: relative;

  span {
    height: 5px;
    width: 50px;
    position: absolute;
    background-color: #20a375;
    bottom: -10px;
    left: 0;
  }
`

const ProjectsContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100vw - 20px);
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

const Button = styled(Link)`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: solid 2px white;
  text-decoration: none;
  transition: all 100ms;

  &:hover {
    background-color: #20a375;
  }
`

const ProjectParagraph = styled.div`
  max-width: 800px;
  min-height: 200px;
  display: flex;
  align-items: center;
  font-weight: 100;
  color: white;
  font-size: 18px;
  margin-left: 12px;
  letter-spacing: 0.5px;
`

const Projects = () => {
  const renderProjects = () => {
    return projectData.map(project => (
      <Project
        title={project.title}
        description={project.description}
        imgURL={project.imgURL}
      />
    ))
  }

  return (
    <ProjectsBackground>
      <ProjectsWrapper>
        <ProjectsHeader>
          <ProjectsTitle>
            Our Projects
            <span />
          </ProjectsTitle>
          <Button to="/projects">All Projects</Button>
        </ProjectsHeader>
        <ProjectsContainer>{renderProjects()}</ProjectsContainer>
        <ProjectParagraph>
          Our projects aren’t just programming exercises. Come create real and
          useful products. Make a impact by contrubuting to some of our open
          sourced projects. Or do you have an idea you want to open source? We
          can help you get your project off the ground.
        </ProjectParagraph>
      </ProjectsWrapper>
    </ProjectsBackground>
  )
}

export default Projects
