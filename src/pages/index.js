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
    <BlogSection data={data} />
  </div>
)

export const query = graphql`
  query getBlogsQuery {
    allMarkdownRemark(limit: 4, sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
            imgURL
            author
          }
        }
      }
    }
    titleImage: imageSharp(id: { regex: "/developer_blur/" }) {
      sizes(maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default IndexPage
