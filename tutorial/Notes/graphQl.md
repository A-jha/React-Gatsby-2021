<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's GaphQL
</h1>

## How To use graphql inside Gatsby

### 1. Add Fields to siteMetadata in gatsby-config

- In this file you mush have to add all site data inside **siteMetadata object** otherwise gatby will give an error.

- site meta data will contains data that can be queried by graphql

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

# useStaticQuery Hook

It takes your GraphQL query and returns the requested data. That’s it!

- Component name must start with upper case letter.

- Import React, graphql and useStaticQuery

```js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
```

## Get data

- Get data from our fields using graphql no async await needed

```js
const getData = graphql`
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
`
```

## use data using useStaticQuery() Hook

- Set you component and use the data fetched

```js
const FetchData = () => {
  const {
    site: {
      siteMetadata: { author, description, complexData },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h3>{author}</h3>
      <p>{description}</p>
      {complexData.map((item, index) => {
        return <p key={index}>Name : {item.name}</p>
      })}
    </div>
  )
}

export default FetchData
```

- Now We can use this data

```js
import FetchData from "../examples/fetchData"
```

- Then add it to component tree

```jsx
<FetchData />
```

### Alias in graphql

- We can set aliases such as if we want to change siteMetaData to info then

- Normaly we run siteMetaData

```gql
{
  site {
    siteMetadata {
      author
    }
  }
}
```

- And output is

```js
{
  "data": {
    "site": {
      "siteMetadata": {
        "author": "Avinash Jha"
      }
    }
  },
  "extensions": {}
}
```

- Now we want to change the name of sitemetaData

```
{
  site {
    info:siteMetadata {
      author
    }
  }
}
```

- the ouput is

```js
{
  "data": {
    "site": {
      "info": {
        "author": "Avinash Jha"
      }
    }
  },
  "extensions": {}
}
```

## Setting name to Queries

- For each query name must be unique
- Let's say first query is MyQ1

```gql
query MyQ1 {
  site {
    info: siteMetadata {
      author
    }
  }
}
```

- second query is MyQ2

```gql
query MyQ2 {
  site {
    info: siteMetadata {
      title
    }
  }
}
```

- Normally whwn you are setting the name then you can face Unhandaled Runtime error then you need to run following command

```shell
#clear all cache
gatsby clean

# then restart the server
gasby develop
#or
npm start
```

# pageQuery(only applied on pages)

- This query only applies on pages not on components.
- In this case we declare a function and inside that we writethe quey and export that function
- the exported function become data props for our component and then we can access the values.

```js
import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>Author: {data.site.siteMetadata.author}</h2>
      {data.site.siteMetadata.complexData.map((items, index) => {
        return (
          <h3 key={index}>
            Name: {items.name} and Age : {items.age}
          </h3>
        )
      })}
      <h3></h3>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        complexData {
          age
          name
        }
      }
    }
  }
`

export default ComponentName
```
