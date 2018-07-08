import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  justify-self: center;
  background: url(${props => props.imgURL}) center;
  background-size: cover;
  border-radius: 5px;
`

const Title = styled.div`
  position: absolute;
  top: 30px;
  color: white;
  background: rgba(20, 20, 20, 0.8);
  padding: 10px 15px;
  border-radius: 5px;
  border-top: 10px solid #20a375;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.4px;
`

const Description = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(20, 20, 20, 0.8);
  margin: 0;
  padding: 10px;
  border-bottom: 10px solid #20a375;
  font-size: 16px;
  font-weight: 100;
  border-radius: 0 0 5px 5px;

  p {
    width: 270px;
    margin: 0;
  }
`

const HoverContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background: rgba(20, 20, 20, 0.7);
  padding: 20px 15px;
  border-radius: 5px;
  border-top: 10px solid #20a375;
  cursor: default;

  animation: light-fade 250ms ease;

  h3,
  p {
    align-self: center;
    max-width: 300px;
  }

  @keyframes light-fade {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.a`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.green ? 'white' : '#20a375')};
  background-color: ${props => (props.green ? '#20a375' : 'white')};
  border-radius: 100px;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`

class Project extends React.Component {
  state = {
    display: false,
  }

  openHover = () => this.setState({ display: true })

  closeHover = () => this.setState({ display: false })

  renderHover = () => {
    const { title, description, codeURL, siteURL } = this.props.project
    return (
      <HoverContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonWrapper>
          <Button href={codeURL} target="_blank" green="true">
            View Code
          </Button>
          <Button href={siteURL} target="_blank">
            Live Demo
          </Button>
        </ButtonWrapper>
      </HoverContainer>
    )
  }

  render() {
    const { title, description, imgURL } = this.props.project
    const { display } = this.state
    return (
      <Wrapper
        imgURL={imgURL}
        onMouseEnter={this.openHover}
        onMouseLeave={this.closeHover}
      >
        {display
          ? this.renderHover()
          : [
              <Title>{title}</Title>,
              <Description>
                <p>{description}</p>
              </Description>,
            ]}
      </Wrapper>
    )
  }
}

export default Project
