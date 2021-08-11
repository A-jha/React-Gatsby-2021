import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/img5.jpg"
            alt="onion-spoon"
            className="hero-img"
            layout="fullWidth"
            placeholder="dominantColor"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h2>Tasty dish warna game Finish</h2>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}
