import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
  height: ${props => (props.display ? '500px' : '300px')};
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${props => props.imgURL});
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms ease-out;
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
  font-size: 24px;
  color: white;
  letter-spacing: 0.4px;
`

const Description = styled.div`
  height: 40%;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
  font-weight: 100;
  border-bottom: 8px solid #20a375;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 16px;

  p {
    width: 270px;
    margin: 0;
  }
`

const HoverDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  background: rgba(20, 20, 20, 0.7);
  color: white;
  padding: 20px 15px;
  border-radius: 5px;
  border-top: 10px solid #20a375;
  animation: menuFade 200ms ease;
  cursor: pointer;

  h3 {
    align-self: center;
  }

  p {
    width: 300px;
    align-self: center;
  }

  @keyframes menuFade {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
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

  toggleDisplay = () => {
    this.setState(prevState => ({ display: true }))
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false)
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
      <div
        style={{
          alignSelf: 'flex-end',
          justifySelf: 'center',
          width: '100%',
          maxWidth: '500px',
        }}
        ref={node => (this.node = node)}
      >
        <ProjectWrapper
          imgURL={imgURL}
          display={display}
          onMouseEnter={this.toggleDisplay}
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
            [
              <Title>{title}</Title>,
              <Description>
                <p>{description}</p>
              </Description>,
            ]
          )}
        </ProjectWrapper>
      </div>
    )
  }
}

export default Project
