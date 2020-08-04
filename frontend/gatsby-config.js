require('react')

module.exports = {
  siteMetadata: {
    title: 'Fashion Shop',
    description:
      'Full stack ecommerce application built with Gatsby, React, GraphQL Yoga, and Prisma',
    author: 'Ryan Santos'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-royal.svg' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-global-styles',
      options: {
        pathToConfigModule: 'src/styles/global.styles.js',
        props: {
          theme: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
}
