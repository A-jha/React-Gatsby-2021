<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's GaphQL
</h1>

## How To use graphql inside Gatsby

### 1. Add description to siteMetadata

```js
module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
}
```

### 2. Add the graphql query

```js
import { graphql } from "gatsby"
```
