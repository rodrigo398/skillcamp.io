import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: icon;
  background-color: transparent;
  border: none;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-self: flex-end;
  width: 30px;
  height: 30px;
`

const BarTop = styled.div`
  height: 2px;
  width: 20px;
  align-self: ${props => (props.active ? 'center' : 'flex-start')};
  border-radius: 10px;
  background-color: #1b1b1b;
  transition: all 200ms;
  transform: ${props =>
    props.active
      ? 'translateY(10px) rotate(45deg) scaleX(1.5)'
      : 'translateY(0) rotate(0) scaleX(1)'};
`

const BarMiddle = styled.div`
  height: 2px;
  width: 30px;
  align-self: center;
  border-radius: 10px;
  background-color: #1b1b1b;
  transition: all 200ms;
  transform: ${props => (props.active ? 'scale(0)' : 'scaleX(1)')};
`

const BarBottom = styled.div`
  height: 2px;
  width: 30px;
  align-self: center;
  border-radius: 100px;
  background-color: #1b1b1b;
  transition: all 200ms;
  transform: ${props =>
    props.active
      ? 'translateY(-10px) rotate(-45deg) scaleX(1)'
      : 'translateY(0) rotate(0) scaleX(1)'};
`

export default ({ toggleMenu, menuActive }) => (
  <Wrapper onClick={toggleMenu}>
    <BarTop active={menuActive} />
    <BarMiddle active={menuActive} />
    <BarBottom active={menuActive} />
  </Wrapper>
)
