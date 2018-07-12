import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const BlogPostLayout = ({ data, location }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date, imgURL } = frontmatter

  return (
    <div>
      <Helmet title={`${title}`} />
      <div>
        <img src={imgURL} />
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        imgURL
        excerpt
      }
    }
  }
`

export default BlogPostLayout
