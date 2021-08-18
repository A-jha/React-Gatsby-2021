import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"
const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecepe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecepe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
