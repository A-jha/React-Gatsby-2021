import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecepesList from "../components/RecepesList"
export default function contact({
  data: {
    allContentfulRecepe: { nodes: recepes },
  },
}) {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Hey, Contact Me We will Learn</h3>
            <p>
              Vape brooklyn portland aesthetic organic kickstarter literally
              everyday carry trust fund. Before they sold out mumblecore
              stumptown cold-pressed.
            </p>
            <p>
              Beard knausgaard biodiesel whatever jianbing vexillologist
              live-edge fanny pack salvia adaptogen.
            </p>
            <p>
              Disrupt hot chicken kogi pabst austin pickled cronut taiyaki
              aesthetic fanny pack. Cray typewriter 90's umami hella raw denim
              quinoa YOLO iceland polaroid.
            </p>
          </article>
          <article className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Add Reviews</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn block">
              Submit
            </button>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Featured Recipes</h5>
          <RecepesList recepes={recepes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecepe(
      sort: { order: ASC, fields: prepTime }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        prepTime
        servings
        cookTime
      }
    }
  }
`
