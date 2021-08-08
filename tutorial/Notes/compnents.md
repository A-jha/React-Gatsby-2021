<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Componets 
</h1>

- Component is used for reusable component

We use component in Gatsby to share componentt among different pages and files.

If we want to add Navbar to our project then we have to write code in each files but using component we can use it as many time we want.

## Genetal convention is of Making a Layout component

Iside Components if we want to use global component that kis a good practice to use layout componet to wrap global component in pages.

- Layout component

```jsx
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
```

- All pages format

```jsx
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      <Link to="/about" state={{ name: "About" }}>
        About
      </Link>
      <div>Home Page</div>
    </Layout>
  )
}
```
