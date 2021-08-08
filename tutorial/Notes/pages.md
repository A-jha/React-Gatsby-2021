<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Pages 
</h1>

## Simple pages

Gatsby provide a beatifull way to navigate through.

> Step1: Create a fpolder names as pages inside src.

```
src
 |
 |---pages
```

Step2: Create some files inside pages say index.js about.js contact.js

```
src
 |
 |---pages
        |--index.js
        |--about.js
        |--contact.js
```

Step3: Navigate through pages

```
- Index.js : http://127.0.0.1:8000/
- contact.js : http://127.0.0.1:8000/contact
- about.js : http://127.0.0.1:8000/about
```

## Nested Pages

Nested pages means inside page folder we can add many other folders .

```
src
 |
 |---pages
        |--projects
        |       |--index.js
        |       |--todo.js
        |       |--game.js
        |       |--quiz.js
        |
        |--Products
        |       |--index.js
        |       |--shop.js
        |
        |--Services
        |       |--index.js
        |       |--servers.js
        |       |-books.js
```

in the above folder structure we can navigate to any folders and file.

> navigate to Products--> index

```
http://127.0.0.1:8000/products
```

> Navigate to products-->shop

```
http://127.0.0.1:8000/products/shop
```

**This is called nested Routing**

## Error page

IF the provided link is not exist then by default we can add an error page.

step1: Create a folder name 404.js inside pages.

step2: Create your error pages and that's it
