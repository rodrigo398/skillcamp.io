import React from 'react'
import Philosophy from '../components/Philosophy'
import Projects from '../components/Projects'
import BlogSection from '../components/BlogSection'
import TitleSection from '../components/TitleSection'

const IndexPage = ({ data }) => (
  <div>
    <TitleSection titleImage={data.titleImage} />
    <Philosophy />
    <Projects />
    <BlogSection />
  </div>
)

export const pageQuery = graphql`
  query HeaderImageQuery {
    titleImage: imageSharp(id: { regex: "/developer_blur/" }) {
      sizes(maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default IndexPage
