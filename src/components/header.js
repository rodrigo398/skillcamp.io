import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/logo_main.svg'

const HeaderWrapper = styled.div`
  background: #222222;
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
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-height: 170px;
  }
`

const Logo = styled(Link)`
  margin: 0 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    height: 30px;
    margin: 0;
  }

  h3 {
    height: 30px;
    margin: 0 3px 0 0;
    font-size: 27px;
  }
`

const NavContainer = styled.div`
  text-align: right;
  font-weight: lighter;
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
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
    margin: 0;
    flex-direction: column-reverse;
  }
`

const Links = styled.div`
  display: flex;
`

const Button = styled.a`
  font-size: 14px;
  text-transform: uppercase;

  width: 160px;
  min-width: 152px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #ed6e35, #f12e43);
  color: white;
  border: none;
  border-radius: 5px;
  justify-self: left;
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

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Logo to="/">
        <img src={logo} alt="skillcamp logo" />
      </Logo>
      <NavContainer>
        <Links>
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contact">contact</Link>
        </Links>
        <Button
          href="https://join.slack.com/t/skillcamp-io/shared_invite/enQtMzgxMjM5NjU1OTU4LTIzNDIzZTA3YTY0ZTY1NWVmMDUxZDllZjVmZjNiZDRiZTdhN2RhZjhhZTI5MGQxNzY1ZDlhNTAxYTlmNWRkYzA"
          target="_blank"
        >
          Join Us On Slack
        </Button>
      </NavContainer>
    </Container>
  </HeaderWrapper>
)

export default Header
