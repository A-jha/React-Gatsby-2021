/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
