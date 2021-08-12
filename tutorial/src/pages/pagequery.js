import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>Author: {data.site.siteMetadata.author}</h2>
      {data.site.siteMetadata.complexData.map((items, index) => {
        return (
          <h3 key={index}>
            Name: {items.name} and Age : {items.age}
          </h3>
        )
      })}
      <h3></h3>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        complexData {
          age
          name
        }
      }
    }
  }
`

export default ComponentName
