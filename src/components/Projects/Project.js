import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  height: 350px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  justify-self: center;
  background: transparent;
  background-size: cover;
  border-radius: 5px;
  perspective: 1500px;
`

const CardFront = styled.div`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  transition: transform 800ms ease;
  backface-visibility: hidden;
  box-shadow: 0 1.5rem 4rem rgba(black, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
  border-radius: 5px;
  
  span {
    position: absolute;
    top: 0;
    background: ${props => props.color};
    z-index: 1;
    width: 100%;
    height: 150px;
    border-radius: 5px;
  }
 
  ${Card}:hover &, ${Card}:active {
    transform :rotateY(-180deg)
  }
`

const CardBack = styled.div`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 800ms ease;
  backface-visibility: hidden;
  box-shadow: 0 1.5rem 4rem rgba(black, 0.3);
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background: ${props => props.color};
  padding: 20px 15px;
  border-radius: 5px;
  cursor: default;

  h3,
  p {
    align-self: center;
    max-width: 300px;
  }

  ${Card}:hover &, ${Card}:active {
    transform: rotateY(0deg);
  }
`

const Title = styled.div`
  position: relative;
  z-index: 5;
  color: white;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.4px;
`

const Image = styled.img`
  position: relative;
  z-index: 5;
  height: 180px;
  margin: 0;
`

const Description = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 0;
  padding: 10px;
  font-size: 16px;
  font-weight: 100;

  p {
    width: 270px;
    margin: 0;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: black;
`

const Button = styled.a`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.fill ? 'white' : '#777')};
  background-color: ${props => (props.fill ? 'transparent' : 'white')};
  border: ${props => (props.fill ? 'solid 1px white' : 'none')}
  border-radius: 100px;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, ${props => (props.fill ? '0' : '0.2')});
  transition: transform 200ms ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`

class Project extends React.Component {
  render() {
    const { title, description, codeURL, siteURL, color } = this.props.project
    const { image } = this.props
    return (
      <Card>
        <CardFront color={color} className="card__front">
          <span name="background" />
          <Title>{title}</Title>
          <Image src={image} />
          <Description>
            <p>{description}</p>
          </Description>
        </CardFront>
        <CardBack color={color} className="card__back">
          <h3>{title}</h3>
          <p>{description}</p>
          <ButtonWrapper>
            <Button href={codeURL} target="_blank" fill="true" color={color}>
              View Code
            </Button>
            <Button href={siteURL} target="_blank" color={color}>
              Live Demo
            </Button>
          </ButtonWrapper>
        </CardBack>
      </Card>
    )
  }
}

export default Project
