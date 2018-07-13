const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/layouts/blog-post.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  html
                  id
                  frontmatter {
                    date
                    path
                    title
                    excerpt
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              path,
            },
          })
        })
      })
    )
  })
}
