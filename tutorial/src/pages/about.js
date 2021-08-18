import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecepesList from "../components/RecepesList"
const About = ({
  data: {
    allContentfulRecepe: { nodes: recepes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Learn like baby and implement like dad</h2>
            <p>
              The image components support three types of layout, which
              determine the image sizes that are generated, as well as the
              resizing behavior of the image itself in the browser.
            </p>
            <p>
              You might find yourself using the same options (like placeholder,
              formats etc.) with most of your GatsbyImage and StaticImage
              instances.{" "}
            </p>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="About"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at Featured recepes</h5>
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
export default About
