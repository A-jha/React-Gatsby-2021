<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's GaphQL
</h1>

## How To use graphql inside Gatsby

### 1. Add description to siteMetadata in gatsby-config

- In this file you mush have to add all site data inside **siteMetadata object** otherwise gatby will give an error.

- site meta data will contains data that can be quried by graphql

```js
siteMetadata: {
    title: "Simply Recepes",
    description: "This is where I used to come in search of tasty dish",
    author: "Avinash Jha",
    person: { name: "Avinash", age: "21" },
    simpleData: ["item 1", "item 2", "item 3"],
    complexData: [
      { name: "Avinash", age: "21" },
      { name: "Arpita", age: "20" },
      { name: "Rachna", age: "21" },
    ],
  },
```

### 2. Now go to http://localhost:8000/\_\_graphql And start writing queries:

- If we want the data from gatsby-config siteMetadata description then we have to specify site-->siteMeatadata-->fields

- after setting the fields we will get the output

```
{
  site {
    siteMetadata {
      title
      description
      simpleData
      complexData {
        name
      }
    }
  }
}
```

and Run them and we will get the data from config meta data

```json
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Simply Recepes",
        "description": "This is where I used to come in search of tasty dish",
        "simpleData": ["item 1", "item 2", "item 3"],
        "complexData": [
          {
            "name": "Avinash"
          },
          {
            "name": "Arpita"
          },
          {
            "name": "Rachna"
          }
        ]
      }
    }
  },
  "extensions": {}
}
```

# StaticQuery

# PageQuery

# useStaticQuery Hook

It takes your GraphQL query and returns the requested data. That’s it!

```js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.title}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              Name : {item.name} <br />
              Age: {item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
```

- Now We can use this data

```js
import FetchData from "../examples/fetchData"
```

- Then add it to component tree

```jsx
<FetchData />
```
