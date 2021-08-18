import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import setupTags from "../utils/setupTags"

export default function TagsList({ recepes }) {
  const newTags = setupTags(recepes)
  return (
    <div className="tags-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}
