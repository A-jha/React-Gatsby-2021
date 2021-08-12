import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query MyQ1 {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { author, description, complexData },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h3>{author}</h3>
      <p>{description}</p>
      {complexData.map((item, index) => {
        return <p key={index}>Name : {item.name}</p>
      })}
    </div>
  )
}

export default FetchData
