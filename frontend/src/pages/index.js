import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import Home, { Body } from '../styles/home-page.styles'
import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import FeaturedProducts from '../components/home/featured-products'
import ScrollProgress from '../components/home/scroll-progress'
import Footer from '../components/home/footer'
import OurServices from '../components/home/our-services'
import ProductSlider from '../components/home/product-slider'
import Hero from '../components/home/hero'

const HomePage = () => {
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
        <Hero />
        <Body>
          <FeaturedProducts scrollPct={pct} />
          <ProductSlider />
          <OurServices scrollPct={pct} />
        </Body>
        <Footer />
      </Home>
    </Layout>
  )
}

export default HomePage
