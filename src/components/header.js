import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #141414;
  color: #ffffff;
  position: fixed;
  width: 100vw;
  z-index: 100;
  top: 0;

  @media screen and (max-width: 600px) {
    position: relative;
  }
`

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  min-height: 60px;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Button = styled.a`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #ed6e35, #f12e43);
  color: white;
  border: none;
  border-radius: 5px;
  justify-self: start;
  margin-left: 8px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 50px;
    justify-self: center;
    margin: 10px 0;
  }
`

const Dash = styled.div`
  hr {
    background: #ffffff;
    height: 5px;
    margin: 0 auto;
    width: 40px;
  }
`

const Menu = styled.div`
  text-align: right;
  font-weight: lighter;
  margin-right: 8px;
  a:link,
  a:visited,
  a:active {
    padding: 8px;
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 8px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Button
        href="https://join.slack.com/t/skillcamp-io/shared_invite/enQtMzgxMjM5NjU1OTU4LTIzNDIzZTA3YTY0ZTY1NWVmMDUxZDllZjVmZjNiZDRiZTdhN2RhZjhhZTI5MGQxNzY1ZDlhNTAxYTlmNWRkYzA"
        target="_blank"
      >
        Join Us On Slack
      </Button>
      <Dash>
        <hr />
      </Dash>
      <Menu>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/blog">blog</Link>
        <Link to="/contact">contact</Link>
      </Menu>
    </Container>
  </HeaderWrapper>
)

export default Header
