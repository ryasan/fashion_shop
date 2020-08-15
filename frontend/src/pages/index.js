import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

import Home, { Body, ScrollBtn } from '../styles/home-page.styles'
import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import FeaturedProducts from '../components/home/featured-products'
import ScrollProgress from '../components/home/scroll-progress'
import Footer from '../components/home/footer'
import OurServices from '../components/home/our-services'
import ProductSlider from '../components/home/product-slider'
import Hero from '../components/home/hero'

const anchors = ['hero', 'featured-products', 'product-slider', 'our-services']

const useCycle = () => {
  const [idx, setIdx] = useState(1)

  const rotateIdx = () => {
    setIdx(prevIdx => {
      console.log((prevIdx + 1) % anchors.length)
      return (prevIdx + 1) % anchors.length
    })
  }

  return { next: anchors[idx], goToNext: rotateIdx }
}

const HomePage = () => {
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const { next, goToNext } = useCycle()
  const yRange = useTransform(scrollYProgress)

  const handleChange = y => {
    setPct(Math.min(Math.ceil(y * 100), 100))
  }

  useEffect(() => {
    yRange.onChange(handleChange)
    return () => yRange.destroy()
  }, [yRange])

  const scrollBtnProps = {
    className: 'scroll-btn',
    onSetActive: goToNext,
    duration: 500,
    delay: 500,
    smooth: true,
    spy: true,
    to: next
  }

  return (
    <Layout>
      <SEO title='Home' /> {/* eslint-disable-line */}
      <Home>
        <ScrollBtn>
          <Link {...scrollBtnProps}>
            <ScrollBtn.Icon name='down-arrow' />
          </Link>
        </ScrollBtn>
        <ScrollProgress scrollPct={pct} />
        <Element name='hero'>
          <Hero />
        </Element>
        <Body>
          <Element name='featured-products'>
            <FeaturedProducts scrollPct={pct} />
          </Element>
          <Element name='product-slider'>
            <ProductSlider />
          </Element>
          <Element name='our-services'>
            <OurServices scrollPct={pct} />
          </Element>
        </Body>
        <Footer />
      </Home>
    </Layout>
  )
}

export default HomePage
