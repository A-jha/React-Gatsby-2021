import React from "react"
import Layout from "../components/Layout"
import AllRecepes from "../components/AllRecepes"
const Recipes = ({ location }) => {
  return (
    <Layout>
      <main className="page">
        <AllRecepes />
      </main>
    </Layout>
  )
}

export default Recipes
