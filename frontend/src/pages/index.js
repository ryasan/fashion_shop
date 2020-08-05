import React from 'react'

import Home from '../styles/home-page.styles'
import SEO from '../components/seo'

import Layout from '../layouts/global-layout'
import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import FeaturedProducts from '../components/home/home-featured-products'
import SocialMedia from '../components/home/social-media-icons'
import { DiagonalBody } from '../images'
import { H1, Li } from '../elements'
import { useProductsQuery } from '../graphql/product/hooks'

const links = [
  'About us',
  'Events',
  'Contact',
  'Privacy',
  'Press',
  'Stay in the know'
]

const HomePage = () => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  return (
    <Layout>
      <Home>
        <SEO title='Home' />
        <Home.Header>
          <H1>Lorem Ipsum</H1>
          <DiagonalBody />
        </Home.Header>
        <Home.Body>
          <ErrorBoundary error={error}>
            {loading ? (
              <Loader color='dark' />
            ) : (
              <FeaturedProducts products={data.products} />
            )}
          </ErrorBoundary>
        </Home.Body>
        <Home.Footer>
          <Home.FooterLinks>
            {links.map((link, i) => (
              <Li key={i}>{link}</Li>
            ))}
          </Home.FooterLinks>
          <SocialMedia />
        </Home.Footer>
      </Home>
    </Layout>
  )
}

export default HomePage
