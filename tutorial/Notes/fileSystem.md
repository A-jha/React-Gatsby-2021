<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's File System 
</h1>

gatsby-source-filesystem is the Gatsby plugin for creating File nodes from the file system.

### Install Nodes using

```
npm install gatsby-source-filesystem
```

### Add it to project by adding it to gatsby-config.js file

```js
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
```

Save and restart the server.

## Query allFile in graphql

- Look into all file inside src/assets/images
- limit them to 3
- sort them based on size of img
- order of sorting is DESC
- get the nodes name and size

```js
query MyQuery {
  allFile(limit: 3, sort: {fields: size, order: DESC}) {
    nodes {
      name
      size
    }
  }
}

```

### Use of filter

- Select allFile and apply filter and
- on relativeDirectory as we have anothe directory in images
- eq is for equal
- test is the directory
- thus we got the filtered result only
- that is all element from test folder

```js
query MyQuery {
  allFile(filter: {relativeDirectory: {eq: "test"}}, sort: {fields: name}) {
    nodes {
      name
      size
    }
  }
}
```

## Query using file in graphql

- Select file then the relative path than if it is eqaual to big.jpg then show size name and relative path of that img

```js
query MyQuery {
  file(relativePath: {eq: "big.jpg"}) {
    name
    relativePath
     size
  }
}

```

### We can use relative path directly to filter

```js
query MyQuery {
  file(relativePath: {eq: "test/img2.jpg"}) {
    name
    relativePath
    size
  }
}
```

## Create another instance of source file system

```js
{
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `examples`,
      path: `${__dirname}/src/examples`,
},
```

- Now we want to accesss only example not images

```js
query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "examples"}}) {
    totalCount
    nodes {
      name
      ext
    }
  }
}
```
