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
                display: `minimal-ui`,
                icon: 'src/static/gatsby-icon.png'
            }
        },
        {
            resolve: 'gatsby-plugin-global-styles',
            options: {
                pathToConfigModule: 'src/styles/global.styles.ts',
                props: {
                    theme: false
                }
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    `Montserrat\:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`,
                    `Meddon\:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`, // font-family: 'Meddon', cursive;
                    `Mrs Saint Delafield\:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`, // font-family: 'Mrs Saint Delafield', cursive;
                    `Mr De Haviland\:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i` // font-family: 'Mr De Haviland', cursive;
                ],
                display: 'swap'
            }
        }
    ]
}
