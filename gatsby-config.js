module.exports = {
  siteMetadata: {
    title: `pfdzm`,
    description: `Personal website for Pablo Fernandez (@pfdzm)`,
    author: `@pfdzm`,
    url: "https://pfdzm.me", // No trailing slash allowed!
    image: "/social.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pfdzm's personal page`,
        short_name: `pfdzm`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#BF3B3B`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // add emotion.js plugin
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
