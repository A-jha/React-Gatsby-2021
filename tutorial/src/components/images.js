import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h2>Gatsby Image</h2>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          layout="fullWidth"
          aspectRatio={16 / 9}
          as="section"
          className="example-img"
        />
      </article>
      <article>
        <h2>Gatsby Image</h2>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          layout="fullWidth"
          aspectRatio={16 / 9}
          as="section"
          className="example-img"
        />
      </article>
      <article>
        <h2>Gatsby Image</h2>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          layout="fullWidth"
          aspectRatio={16 / 9}
          as="section"
          className="example-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid black;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
