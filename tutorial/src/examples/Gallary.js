import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { ext: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 300
            width: 400
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
const Gallary = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div>
      <h1 className="title">Gallary</h1>
      <Wrapper>
        {nodes.map((node, index) => {
          const pathToImg = getImage(node)
          return (
            <GatsbyImage
              key={index}
              image={pathToImg}
              alt="node.name"
              className="pics"
            />
          )
        })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .tilte {
    text-align: center;
  }
  .pics {
    margin: 3px;
  }
`
export default Gallary
