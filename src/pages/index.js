import React from 'react'
import styled from 'styled-components'
import Philosophy from '../components/Philosophy'
import Projects from '../components/Projects'
import BlogSection from '../components/BlogSection'
import TitleSection from '../components/TitleSection'

const Wrapper = styled.div`
  margin-top: -60px;

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const IndexPage = ({ data }) => (
  <Wrapper>
    <TitleSection />
    <Philosophy />
    <Projects />
    <BlogSection blogPosts={data.blogPosts} />
  </Wrapper>
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
  }
`

export default IndexPage
