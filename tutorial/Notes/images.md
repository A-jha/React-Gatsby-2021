<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Plugin Images 
</h1>

The Gatsby Image plugin includes two image components: one for static and one for dynamic images.

- if your image will not change frequently then keep image as static.
- If you image change over time then use Dnamic images.

## Static Images

When you build your site, the StaticImage component will load the image from your filesystem or from the remote URL, and it will generate all the sizes and formats that you need to support a responsive image.

- if image is in local directory

```jsx
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return <StaticImage src="../images/dino.png" alt="A dinosaur" />
}
```

- if url then

```jsx
import { StaticImage } from "gatsby-plugin-image"

export function Kitten() {
  return <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
}
```

## Configure the image.

You configure the image by passing props to the <StaticImage /\> component. You can change the size and layout, as well as settings such as the type of placeholder used when lazy loading. There are also advanced image processing options available. You can find the full list of options in the API docs.

```jsx
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return (
    <StaticImage
      src="../images/dino.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}
```

This component renders a 200px by 200px image of a dinosaur. Before loading it will have a blurred, low-resolution placeholder. It uses the "fixed" layout, which means the image does not resize with its container.

### Shared Plugins

| prop            | type                 | default     |
| --------------- | -------------------- | ----------- |
| alt (required)  | string               | ""          |
| as              | any element like div |             |
| loading         | "eager"<br>"lazy"    | "lazy"      |
| className       | string               | ""          |
| imgClassName    | string               |             |
| style           | css properties       |             |
| imgStyle        | cssProperties        |             |
| backgroundColor | string               | transparent |
| objectFit       |                      | cover       |
| objectPosition  |                      | 50% 50%     |

## Layout

### constrained

This is the default layout. It displays the image at the size of the source image, or you can set a maximum size by passing in width or height). If the screen or container size is less than the width of the image, it scales down to fit, maintaining its aspect ratio. It generates smaller versions of the image so that a mobile browser doesn’t need to load the full-size image.

### fixed

This is a fixed-size image. It will always display at the same size, and will not shrink to fit its container. This is either the size of the source image, or the size set by the width and height props. Only use this if you are certain that the container will never need to be narrower than the image.

### fullWidth

Use this for images that are always displayed at the full width of the screen, such as banners or hero images. Like the constrained layout, this resizes to fit the container. However it is not restricted to a maximum size, so will grow to fill the container however large it is, maintaining its aspect ratio. It generates several smaller image sizes for different screen breakpoints, so that the browser only needs to load one large enough to fit the screen. You can pass a breakpoints prop if you want to specify the sizes to use, though in most cases you can allow it to use the default.

## aspectRatio

The aspectRatio prop forces an image to the specified aspect ratio, cropping if needed. The value is a number, but can be clearer to express as a fraction, e.g. aspectRatio={16/9}
