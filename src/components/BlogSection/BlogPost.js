import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 150ms ease;

  img {
    transition: filter 200ms ease;
    filter: grayscale(80%);
  }

  &:hover {
    transform: translateY(-5px);
    text-decoration: underline #555;

    img {
      filter: grayscale(0);
    }
  }
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

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
    font-weight: 600;
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

const BlogPost = ({ title, author, imgURL, URL }) => {
  // TODO: wire up props to component

  return (
    <Wrapper to="/blog">
      <Image src="https://picsum.photos/200/200?image=823" />
      <Content>
        <h3 name="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </h3>
        <p name="author">Jane Doe</p>
      </Content>
    </Wrapper>
  )
}

export default BlogPost
