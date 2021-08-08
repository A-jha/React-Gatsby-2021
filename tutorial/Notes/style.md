<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Styling
</h1>

Gatsby doesn’t have an opinion about which styling approach you choose. Almost every possible option is supported through official and community plugins.

## Styling Methods

1. Inline CSS

```jsx
<div style={{ color: "red", textTransform: "capitalize", fontSize: "2rem" }}>
```

- Inline css is good to style single element but is have mutiple tags/components which uses similar style than it is very annoying to use inline css.

2. Global Css

- global css can have name collision

For simple test let's create a file in component layout.css

- import global css to your component

```jsx
import "./layout.css"
```

- Inline style has more preference over global

3. module css

- Module css is used to prevent name collision

We use finame.module.css as css file name and all style of specific fill will be there.

When we are using same class name for all modules gatsby add additinal class to differentiate our class from other class

4. Use [styled component](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)
   A Gatsby plugin for styled-components with built-in server-side rendering support.

Styled component is a plugin in Gatsby such that we can use our styke in very efficient way .

- go to link and learn how to install

## Styled Component

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

## [Normalise CSS](https://necolas.github.io/normalize.css/)

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
