module.exports = {
  siteMetadata: {
    title: 'Fashion Shop',
    description:
      'Full stack ecommerce application built with Gatsby, React, GraphQL Yoga, and Prisma',
    author: 'Ryan Santos'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-ecommerce',
        short_name: 'E&S',
        start_url: '/',
        background_color: '#1b1920',
        theme_color: '#1b1920',
        display: 'E&S Streetwear',
        icon: 'src/static/logo-royal.svg'
      }
    },
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
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `montserrat\:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i` // eslint-disable-line
        ],
        display: 'swap'
      }
    }
  ]
}
