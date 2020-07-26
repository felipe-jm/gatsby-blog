require('dotenv').config();

const queries = require('./src/utils/algolia_queries');

module.exports = {
  siteMetadata: {
    title: 'Felipe Jung',
    position: 'Fullstack Developer',
    description: 'Blog about web development and my learnings',
    author: '@felipejung',
    siteUrl: 'https://johndoe.com.br',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // requires to be the first one to work with gatsby-remark-images!!
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`,
      },
    },
    // -----------------------------------------------------------
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-lazy-load',
          // required to be the last one
          'gatsby-remark-prismjs',
          // --------------------------
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Felipe Jung de Mattos',
        short_name: 'Felipe Jung',
        start_url: '/',
        background_color: '#16202c',
        theme_color: '#16202c',
        display: 'minimal-ui',
        icon: 'src/images/profile-pic.jpeg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};
