import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  background: #ded5c5;
  color: #000000;
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding: 20px 0 0 0;
`

const BackToTop = styled.div`
  button {
    background: #ffffff;
    color: #000000;
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    display: block;
    max-width: 240px;
    text-align: center;
    border: none;
    cursor: pointer;
    outline: none;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
`

const Copyright = styled.div`
  text-align: right;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

const Menu = styled.div`
  text-align: left;
  a:link,
  a:visited,
  a:active {
    padding: 0 20px;
    color: #000000;
    text-decoration: none;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

const SubscribeInput = styled.input`
  background: #ffffff;
  color: #000000;
  padding: 10px 20px;
  outline: none;
  border: none;
  max-width: 440px;
  width: 100%;
`

const SubscribeButton = styled.button`
  background: transparent;
  position: absolute;
  z-index: 10;
  right: 0;
  top: 30px;
  border: none;
  color: #fc5e4f;
  cursor: pointer;
`

const Subscribe = styled.div`
  text-align: right;
  padding: 20px 0;
  position: relative;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

class Footer extends React.Component {
  scrollUp = () => {
    console.log('here')
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (top > 0) {
      window.scrollTo(0, top - 15)
      setTimeout(this.scrollUp, 10)
    }
  }

  render() {
    return (
      <FooterWrapper>
        <Container>
          <Menu>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/blog">blog</Link>
            <Link to="/contact">contact</Link>
          </Menu>
          <Subscribe>
            <form>
              <SubscribeInput placeholder="Your email" />
              <SubscribeButton>subscribe &#8594;</SubscribeButton>
            </form>
          </Subscribe>
          <BackToTop>
            <button onClick={this.scrollUp}>Back to Top</button>
          </BackToTop>
          <Copyright>&copy; 2018 All rights reserved.</Copyright>
        </Container>
      </FooterWrapper>
    )
  }
}

export default Footer
