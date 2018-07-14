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
    <BlogSection blogPosts={data.blogPosts} />
  </div>
)

export const query = graphql`
  query getLandingPageData {
    blogPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date] }
    ) {
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
      sizes(
        maxWidth: 1366
        quality: 80
        traceSVG: { color: "#393939", threshold: 100 }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

export default IndexPage
