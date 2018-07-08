import React from 'react'
import Link from 'gatsby-link'
import Philosophy from '../components/Philosophy'
import Projects from '../components/Projects'
import BlogSection from '../components/BlogSection'
import TitleSection from '../components/TitleSection'

const IndexPage = () => (
  <div>
    <TitleSection />
    <Philosophy />
    <Projects />
    <BlogSection />
  </div>
)

export default IndexPage
