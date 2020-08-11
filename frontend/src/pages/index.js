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
import OurServices from '../components/home/our-services'

const Products = props => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  if (loading) {
    return (
      <Body.Loader>
        <Loader color='white' />
      </Body.Loader>
    )
  }

  const products = data.products.slice(0, 7)

  const featuredProducts = products.filter(p =>
    ['hoodie_7_front5', 'T_7_front5'].includes(p.sku)
  )

  const slideItems = products.map(item => ({
    ...item,
    link: `/shop/${item.id}/`,
    image: getFrontImage(item.sku),
    bodyContent: [item.title, formatPrice(item.price)]
  }))

  return (
    <ErrorBoundary error={error}>
      <FeaturedProducts scrollPct={props.scrollPct} products={featuredProducts} />
      <Slider items={slideItems} title='Browser our latest threads.' />
    </ErrorBoundary>
  )
}

const HomePage = ({ items, featuredItems }) => {
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress)

  const handleChange = y => {
    setPct(Math.min(Math.ceil(y * 100), 100))
  }

  useEffect(() => {
    yRange.onChange(handleChange)
    return () => yRange.destroy()
  }, [yRange])

  return (
    <Layout>
      <SEO title='Home' />
      <Home>
        <ScrollProgress scrollPct={pct} />
        <Heading>
          <Heading.TextContainer>
            <Heading.Title>
              E <Span modifiers='red_color'>&</Span> S Streetwear
            </Heading.Title>
            <Heading.Subtitle>
              Keeping people dressed comfortably 365 days a year.
            </Heading.Subtitle>
          </Heading.TextContainer>
        </Heading>
        <Body>
          <Products scrollPct={pct} />
          <OurServices scrollPct={pct} />
        </Body>
        <Footer />
      </Home>
    </Layout>
  )
}

export default HomePage
