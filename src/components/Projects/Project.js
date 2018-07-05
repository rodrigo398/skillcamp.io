import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
  height: ${props => (props.display ? '400px' : '250px')};
  width: ${props => (props.display ? '325px' : '250px')};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${props => props.imgURL});
  margin: 0 14px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 200ms ease-out;

  &:hover {
    transform: translateY(${props => !props.display && '-5px'});
  }
`

const Title = styled.div`
  position: absolute;
  top: 30px;
  margin: 0 auto;
  padding: 10px 15px;
  border-radius: 5px;
  border-top: 10px solid #20a375;
  background-color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  color: white;
  animation: title 200ms ease-out;
  letter-spacing: 0.4px;

  @keyframes title {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }
`

const Description = styled.div`
  height: 40%;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0;

  font-weight: 100;
  border-bottom: 8px solid #20a375;
  animation: titleFade 200ms ease;

  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
  font-size: 15px;

  @keyframes titleFade {
    0% {
      height: 100%;
    }
    100% {
      height: 40%;
    }
  }
`

const HoverDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(20, 20, 20, 0.7);
  color: white;
  padding: 20px 15px;
  border-radius: 5px;
  border-top: 10px solid #20a375;
  animation: menuFade 150ms;
  cursor: default;

  @keyframes menuFade {
    0% {
      height: 40%;
    }
    100% {
      height: 100%;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.a`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${props => (props.code ? 'white' : '#20a375')};
  background-color: ${props => (props.code ? '#20a375' : 'white')};
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`

class Project extends React.Component {
  state = {
    display: false,
  }

  openDisplay = () => {
    this.setState({ display: true })
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClickOutside, false)
  }

  handleClickOutside = e => {
    if (this.state.display && !this.node.contains(e.target)) {
      this.setState({ display: false })
    }
  }

  render() {
    const { title, description, imgURL, codeURL } = this.props
    const { display } = this.state
    return (
      <div ref={node => (this.node = node)}>
        <ProjectWrapper
          imgURL={imgURL}
          display={display}
          onClick={this.openDisplay}
        >
          {display ? (
            <HoverDetails className="hover-menu">
              <h3>{title}</h3>
              <p>{description}</p>
              <ButtonWrapper>
                <Button href={`${codeURL}`} code="true">
                  View Code
                </Button>
                <Button href={`${codeURL}`}>Live Demo</Button>
              </ButtonWrapper>
            </HoverDetails>
          ) : (
            [<Title>{title}</Title>, <Description>{description}</Description>]
          )}
        </ProjectWrapper>
      </div>
    )
  }
}

export default Project
