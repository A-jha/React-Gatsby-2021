import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecepesList = ({ recepes = [] }) => {
  console.log(recepes.length)
  return (
    <div className="recipes-list">
      {recepes.map((recepe, index) => {
        const { id, title, image, description, servings, cookTime } = recepe
        const pathToImg = getImage(image)
        return (
          <Link key={index} to={`/${title}`} className="recipe">
            <GatsbyImage image={pathToImg} className="recipe-img" alt={title} />
            <h4>{title}</h4>
            <p>Serving Time : {servings}</p>
            <p>Cook Time : {cookTime}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecepesList
