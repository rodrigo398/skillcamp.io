import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/skillcamp_logo.svg'
import MenuIcon from './MenuIcon'

const HeaderWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${props =>
    props.atTop && props.isHome
      ? 'transparent'
      : 'linear-gradient(to right, #fea44e, #ffbc3a)'};
  color: #1b1b1b;
  z-index: 100;
  transition: background 200ms;

  @media screen and (max-width: 600px) {
    position: relative;
    background: linear-gradient(to right, #fea44e, #ffbc3a);
  }
`

const Container = styled.div`
  height: ${props => (props.active && props.mobile ? '400px' : '60px')};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'logo  navigation';
  justify-content: space-between;
  align-items: center;
  transition: all 200ms ease;

  @media screen and (max-width: 600px) {
    padding: 15px 0;
    overflow: hidden;
    align-items: flex-start;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'logo       icon'
      'navigation navigation';
  }
`

const Logo = styled(Link)`
  grid-area: logo;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  color: white;
  text-decoration: none;
  transition: transform 200ms ease;
  transform: ${props =>
    props.atTop ? 'scale(1.4) translateX(20px)' : 'scale(1)'};

  img {
    height: 30px;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    transform: scale(1.2) translateX(10px);
  }
`

const NavContainer = styled.div`
  grid-area: navigation;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: 15px;
  font-size: 17px;
  font-weight: lighter;
  text-align: right;
  animation: ${props => (props.mobile ? 'grow 200ms ease' : 'none')};

  a:link,
  a:visited,
  a:active {
    padding: 8px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .button {
    color: white;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    text-align: center;
    margin: 0;
    flex-direction: column;
    justify-content: space-between;
  }

  @keyframes grow {
    from {
      transform: scaleY(0);
      opacity: 0;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`

const Links = styled.div`
  display: flex;
  a {
    color: inherit;
  }

  @media screen and (max-width: 600px) {
    height: 200px;
    flex-direction: column;
    justify-content: space-around;

    a {
      width: 80vw;
      height: 100%;
      border-bottom: 1px dotted #1b1b1b;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const Button = styled.a`
  width: 160px;
  min-width: 152px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #22a477;
  color: white;
  border: none;
  border-radius: 5px;
  justify-self: left;
  margin-left: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 50px;
    justify-self: center;
    margin: 10px 0;
  }
`

class Header extends React.Component {
  state = {
    scrollHeightZero: true,
    mobile: false,
    menuActive: false,
  }

  toggleMenu = () =>
    this.setState(prevState => ({ menuActive: !prevState.menuActive }))

  componentDidMount() {
    if (typeof window !== undefined) {
      this.setState({ mobile: window.innerWidth <= 600 })

      window.addEventListener('resize', () => {
        if (!this.state.mobile && window.innerWidth < 600) {
          this.setState({ mobile: true })
        } else if (this.state.mobile && window.innerWidth > 600) {
          this.setState({ mobile: false })
        }
      })

      window.addEventListener('scroll', () => {
        if (!this.state.scrollHeightZero && window.scrollY < 60) {
          this.setState({ scrollHeightZero: true })
        } else if (this.state.scrollHeightZero && window.scrollY > 60) {
          this.setState({ scrollHeightZero: false })
        }
      })
    }
  }

  render() {
    const { scrollHeightZero, mobile, menuActive } = this.state

    // check to see if home, only have transparent header at top on home.
    const isHome = this.props.location.pathname === '/'
    return (
      <HeaderWrapper atTop={scrollHeightZero} isHome={isHome}>
        <Container active={menuActive} mobile={mobile}>
          <Logo atTop={scrollHeightZero} to="/">
            <img src={logo} alt="skillcamp logo" />
          </Logo>
          {(!mobile || menuActive) && (
            <NavContainer mobile={mobile}>
              <Links>
                <Link to="/about">about</Link>
                <Link to="/projects">projects</Link>
                <Link to="/blog">blog</Link>
                <Link to="/contact">contact</Link>
              </Links>
              <Button
                href="https://join.slack.com/t/skillcamp-io/shared_invite/enQtMzgxMjM5NjU1OTU4LTIzNDIzZTA3YTY0ZTY1NWVmMDUxZDllZjVmZjNiZDRiZTdhN2RhZjhhZTI5MGQxNzY1ZDlhNTAxYTlmNWRkYzA"
                target="_blank"
                className="button"
              >
                Join Us On Slack
              </Button>
            </NavContainer>
          )}
          {mobile && (
            <MenuIcon toggleMenu={this.toggleMenu} menuActive={menuActive} />
          )}
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header
