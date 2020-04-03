module.exports = {
  siteMetadata: {
    title: `Hospital das Clínicas`,
    description: `Site da campanha de arrecadação de fundos para o Hospital das Clínicas destinado para equipamentos que auxiliarião no combate à pandemia do coronavírus.`,
    author: `Hospital das Clínicas`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#444f53`,
        theme_color: `#444f53`,
        display: `minimal-ui`,
        icon: `src/images/hc-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vempraguerra.com.br",
        protocol: "https",
        hostname: "www.vempraguerra.com.br",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-162614932-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`fetch`]
      },
   },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
