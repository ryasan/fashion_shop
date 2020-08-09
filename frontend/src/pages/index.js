import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import Home, { Heading, Body } from '../styles/home-page.styles'
import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import FeaturedProducts from '../components/home/featured-products'
import ProductPreview from '../components/home/product-preview'
import ScrollProgress from '../components/home/scroll-progress'
import Carousel from '../components/home/carousel'
import Footer from '../components/home/footer'
import { Span } from '../shared/elements'
import { useProductsQuery } from '../graphql/product/hooks'

const HomePage = () => {
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress)
  const { data, loading, error } = useProductsQuery({
    variables: { where: { sku_in: ['hoodie_7_front5', 'T_7_front5'] } }
  })

  const handleChange = y => {
    setPct(Math.min(Math.ceil(y * 100), 100))
  }

  useEffect(() => {
    yRange.onChange(handleChange)
    return () => yRange.destroy()
  }, [yRange])

  return (
    <Layout>
      <Home>
        <SEO title='Home' />
        <ScrollProgress pct={pct} />
        <Heading>
          <Heading.TextContainer>
            <Heading.Title>
              E <Span modifiers='red_color'>&</Span> S Streetware
            </Heading.Title>
            <Heading.Subtitle>
              Keeping people dressed comfortably 365 days a year.
            </Heading.Subtitle>
          </Heading.TextContainer>
        </Heading>
        <Body>
          <ErrorBoundary error={error}>
            {loading ? (
              <Loader color='dark' />
            ) : (
              <FeaturedProducts pct={pct} products={data.products} />
            )}
          </ErrorBoundary>
          <Carousel />
          <ProductPreview pct={pct} />
        </Body>
        <Footer />
      </Home>
    </Layout>
  )
}

export default HomePage
