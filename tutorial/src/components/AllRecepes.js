import React from "react"
import TagsList from "./TagsList"
import RecepesList from "./RecepesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecepe(sort: { order: ASC, fields: prepTime }) {
      nodes {
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        prepTime
        servings
        cookTime
        title
        description {
          id
          description
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecepes = () => {
  const {
    allContentfulRecepe: { nodes: recepes },
  } = useStaticQuery(query)
  console.log(recepes)
  return (
    <>
      <section className="recipes-container">
        <TagsList recepes={recepes} />
        <RecepesList recepes={recepes} />
      </section>
    </>
  )
}
export default AllRecepes
