<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Image
</h1>

Gatsby image comsumes dynamic data and the data comes from graphql

## First query

- Nodes childImageSharp has a special properties known as gatsbyImageData and thats exactly what we are looking for

**gatsbyimageData is the object that gatsby iages needs**

## Basic Query

```gql
query MyQuery {
  allFile {
    nodes {
      name
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
```

## More complex

- filter is used to filter all the image with an extention of .svg and remove it
- childImageSharp has many optiuon to explore jaut explore and look what suits best to your project.
- in thsi case using transformOptions is turned my images into grqayscale
- set heigh width
- set the layout
- and many more

```js
query MyQuery {
  allFile(limit: 1, filter: {ext: {ne: "svg"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          height: 300
          width: 400
          transformOptions: {grayscale: true}
        )
      }
    }
  }
}
```

## Iterate over the data and display them

```js
const Gallary = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const nodes = data.allFile.nodes
  return (
    <div>
      <h1 className="title">Gallary</h1>
      <Wrapper>
        {nodes.map((node, index) => {
          return (
            <GatsbyImage
              key={index}
              image={node.childImageSharp.gatsbyImageData}
              alt="node.name"
            />
          )
        })}
      </Wrapper>
    </div>
  )
}
```

## Get image Helper Function

- getImage function return undefined if image properties is null
- for a null whole site can break so it is good practice to use fallback functions

```js
<Wrapper>
  {nodes.map((node, index) => {
    const pathToImg = getImage(node)
    return (
      <GatsbyImage
        key={index}
        image={pathToImg}
        alt="node.name"
        className="pics"
      />
    )
  })}
</Wrapper>
```
