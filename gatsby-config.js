module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true - include to prevent
        // parsing js files as images.
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EMC2 Innovation`,
        short_name: `emc2innovation`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff9800`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
