import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import BlogPost from './BlogPost'

const Wrapper = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`

const TitleWrapper = styled.div`
  height: 250px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  position: relative;
  display: flex;
  color: #555;
  font-size: 20px;
  font-weight: 300;

  b {
    color: #222222;
    margin-right: 5px;
  }
  span {
    position: absolute;
    bottom: -10px;
    margin: 0 auto;
    height: 5px;
    width: 83px;
    background-color: #20a375;
  }
`

const BlogContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0 20px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Paragraph = styled.div`
  min-height: 250px;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 20px;
  text-align: center;
`

const ButtonWrapper = styled.div`
  height: 130px;
`

const Button = styled(Link)`
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #20a375;
  color: white;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    text-decoration: underline;
  }
`

const BlogSection = ({ blogPosts }) => {
  const { edges: posts } = blogPosts
  const renderBlogPosts = () => {
    return posts.map(post => {
      const { frontmatter } = post.node
      return <BlogPost key={frontmatter.path} frontmatter={frontmatter} />
    })
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <b>Featured</b> Blog Posts
          <span />
        </Title>
      </TitleWrapper>

      <BlogContainer>{renderBlogPosts()}</BlogContainer>

      <Paragraph>
        Share your experience, learn from others and become an active member of
        the developer community.
      </Paragraph>

      <ButtonWrapper>
        <Button to="/blog">See all blog posts</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default BlogSection
