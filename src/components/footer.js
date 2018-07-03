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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding: 80px 0 0 0;
`

const BackToTop = styled.div`
  button {
    background: #ffffff;
    color: #000000;
    font-size: 20px;
    text-decoration: none;
    padding: 20px 40px;
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
  font-style: italic;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

const Menu = styled.div`
  text-align: left;
  font-weight: bold;
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

const Footer = () => {
  const scrollUp = () => {
    //TODO: Find a better solution
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (top > 0) {
      window.scrollTo(0, top - 15)
      setTimeout(scrollUp(), 10)
    }
  }

  return (
    <FooterWrapper>
      <Container>
        <BackToTop>
          <button onClick={() => scrollUp()}>Back to Top</button>
        </BackToTop>
        <Menu>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contact">contact</Link>
        </Menu>
        <Copyright>&copy; 2018 All rights reserved.</Copyright>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
