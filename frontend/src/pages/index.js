import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import Home, { Heading, Body } from '../styles/home-page.styles'
import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import FeaturedProducts from '../components/home/featured-products'
import ScrollProgress from '../components/home/scroll-progress'
import Slider from '../components/slider'
import Footer from '../components/home/footer'
import { Span } from '../shared/elements'
import { useProductsQuery } from '../graphql/product/hooks'
import { getFrontImage, formatPrice } from '../shared/utils'

const HomePage = ({ items, featuredItems }) => {
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress)

  const slideItems = items.slice(0, 7).map(item => ({
    ...item,
    link: `/shop/${item.id}/`,
    image: getFrontImage(item.sku),
    bodyContent: [item.title, formatPrice(item.price)]
  }))

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
          <FeaturedProducts pct={pct} products={featuredItems} />
          <Slider items={slideItems} />
        </Body>
        <Footer />
      </Home>
    </Layout>
  )
}

const withProductsData = Component => props => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })
  const {
    data: featuredData,
    loading: featuredLoading,
    error: featuredError
  } = useProductsQuery({
    variables: { where: { sku_in: ['hoodie_7_front5', 'T_7_front5'] } }
  })

  if (loading || featuredLoading) {
    return (
      <Layout>
        <Home>
          <SEO title='Home' />
          <Loader color='dark' />
        </Home>
      </Layout>
    )
  }

  const products = data.products.slice(0, 7)

  return (
    <ErrorBoundary error={error || featuredError}>
      <SEO title='Home' />
      <Component
        {...props}
        items={products}
        featuredItems={featuredData.products}
      />
    </ErrorBoundary>
  )
}

export default withProductsData(HomePage)
