import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #141414;
  color: #ffffff;
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  min-height: 80px;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Join = styled.div`
  a {
    background: #f12e43;
    color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: block;
    max-width: 240px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
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
  font-weight: bold;
  a:link,
  a:visited,
  a:active {
    padding: 0 20px;
    color: #ffffff;
    text-decoration: none;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Join>
        <a
          href="https://join.slack.com/t/skillcamp-io/shared_invite/enQtMzgxMjM5NjU1OTU4LTIzNDIzZTA3YTY0ZTY1NWVmMDUxZDllZjVmZjNiZDRiZTdhN2RhZjhhZTI5MGQxNzY1ZDlhNTAxYTlmNWRkYzA"
          target="_blank"
        >
          Join Our Slack Channel
        </a>
      </Join>
      <Dash>
        <hr />
      </Dash>
      <Menu>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/blog">blog</Link>
        <Link to="/contact" style={{ paddingRight: 0 }}>
          contact
        </Link>
      </Menu>
    </Container>
  </HeaderWrapper>
)

export default Header
