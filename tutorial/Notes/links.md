<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Link 
</h1>

The <Link\> component drives a powerful performance feature called **preloading**.

Preloading is used to prefetch page resources so that the resources are available by the time the user navigates to the page.

We use the browser’s Intersection Observer API to observe when a <Link> component enters the user viewport and then start a low-priority request for the linked page’s resources. Then when a user moves their mouse over a link and the onMouseOver event is triggered, we upgrade the fetches to high-priority.

This two stage preloading helps ensure the page is ready to be rendered as soon as the user clicks to navigate.

Intelligent preloading like this eliminates the latency users experience when clicking on links in sites built in most other frameworks.

## Replace <a\> tag with <Link\>

In any situation where you want to link between pages on the same site, use the Link component instead of an a tag. The two elements work much the same except href

### Import Link from gatsby

```jsx
import { Link } from "gatsby"
```

### Set simple link to go to about page

```jsx
<Link to="/about">About page</Link>
```

### Add style to aActive link

Link provides two options for adding styles to the active link:

- activeStyle — a style object that will only be applied when the current item is active

```jsx
<Link to="/about/" activeStyle={{ color: "red" }}>
  About
</Link>
```

- activeClassName — a class name that will only be added to the Link when the current item is active

```jsx
/* This assumes the `active` class is defined in your CSS */
<Link to="/" activeClassName="active">
  Home
</Link>
```

## Pass state as props to the linked page

Sometimes you’ll want to pass data from the source page to the linked page.

You can do this by passing a state prop to the Link component or on a call to the navigate function.

The linked page will have a location prop containing a nested state object structure containing the passed data.

```jsx
export default function Home() {
  return (
    <>
      <Link to="/about" state={{ name: "Avinash" }}>
        About
      </Link>
      <div>Hello world</div>
    </>
  )
}
```

- To access the props

```jsx
const about = ({ location }) => {
  return (
    <div>
      <h1>Hello I am {location.state.name}</h1>
    </div>
  )
}
}
```

## Replace history to change “back” button behavior

Replace will replace the link when we press back button

On going from page1 to page2 nack button is linked to page1 but if we use replace than we can link back button to another link

```jsx
const AreYouSureLink = () => (
  <Link
    to="/confirmation/"
    replace="/
  >
    Yes, I’m sure
  </Link>
```

## navigate Helper function

Sometimes you need to navigate to pages programmatically, such as during form submissions. In these cases, Link won’t work.

### import navigator

```jsx
import { navigate } from "gatsby"
```

- form file

```jsx
export default () => {
  const [name, setName] = useState("")
  const handleInput = event => {
    setName(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()

    navigate("/suprise/", { state: { name } })
  }
}
```

- surprise file

```jsx
export default ({ location }) => {
  return (
    <>
      <h1>Surprise, {location.state.name}</h1>
    </>
  )
}
```
