import React from 'react'
import Link from 'gatsby-link'

import './index.css'
import styled from 'styled-components'

const IndexLayout = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 950px;
  padding: 0 1rem;
  h1 {
    display: inline;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .nav-list {
    float: right;
    list-style: none;
    text-decoration: none;
  }
`
const ListLinkLayout = styled.li`
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
`

const ListLink = props => (
  <ListLinkLayout>
    <Link to={props.to}>{props.children}</Link>
  </ListLinkLayout>
)

const Index = ({ children }) => (
  <IndexLayout>
    <h1>Skill Camp</h1>
    <ul className="nav-list">
      <ListLink to="/about/">What is Skill Camp?</ListLink>
      <ListLink to="/">Knowledgebase</ListLink>
      <ListLink to="/">Projects</ListLink>
      <ListLink to="/">Blog</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    {children()}
  </IndexLayout>
)

export default Index
