import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Wrapper = styled.div`
  min-height: 100vw;
  margin-top: 60px;

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,700"
        rel="stylesheet"
      />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} location={location} />
    <Wrapper>{children()}</Wrapper>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
