import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease-out;

  img {
    transition: all 200ms ease-out;
    filter: grayscale(90%);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: translateY(-5px);
    text-decoration: underline #555;

    img {
      filter: grayscale(0);
      box-shadow: 0 9px 10px rgba(0, 0, 0, 0.3);
    }
  }
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;

  @media screen and (max-width: 900px) and (min-width: 700px) {
    height: 150px;
    width: 150px;
  }
`

const Content = styled.div`
  max-width: 250px;

  h3 {
    color: #222;
    margin: 0;
    font-size: 18px;
    line-height: 22px;
  }

  p {
    width: 100%;
    color: #777;
    margin: 10px 0;
    font-size: 15px;
  }

  @media screen and (max-width: 900px) and (min-width: 700px) {
    max-width: 200px;
  }
`

const BlogPost = ({ frontmatter }) => {
  const { title, author, imgURL, path } = frontmatter
  return (
    <Wrapper to={path}>
      <Image src={imgURL} />
      <Content>
        <h3 name="title">{title}</h3>
        <p name="author">{author}</p>
      </Content>
    </Wrapper>
  )
}

export default BlogPost
