module.exports = {
  siteMetadata: {
    title: 'Y Made',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/media`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-netlify-identity-widget',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
