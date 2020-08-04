import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Home, { SocialMedia, MotionIcon, Card } from '../styles/home-page.styles'
import SEO from '../components/seo'
import Icon from '../components/icons'
import Layout from '../layouts/global-layout'
import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import DiagonalBody from '../images/diagonal-body.svg'
import SkullText from '../images/skull-text.svg'
import NinjaText from '../images/ninja-text.svg'
import { H3 } from '../elements'
import { useProductsQuery } from '../graphql/product/hooks'
import { getFrontImage, getBackImg } from '../utils'

const iconParentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const iconChildrenVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const socials = ['facebook-filled', 'instagram-filled', 'twitter-filled']

const SocialMediaIcons = () => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)

  const detectScrollPosition = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScrolledToBottom(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', detectScrollPosition)
    return () => window.removeEventListener('scroll', detectScrollPosition)
  }, [])

  return (
    <AnimatePresence>
      {scrolledToBottom && (
        <SocialMedia
          variants={iconParentVariants}
          initial='hidden'
          animate={scrolledToBottom ? 'show' : 'hidden'}
        >
          {socials.map((social, i) => (
            <MotionIcon key={i} variants={iconChildrenVariants}>
              <Icon name={social} />
            </MotionIcon>
          ))}
        </SocialMedia>
      )}
    </AnimatePresence>
  )
}

const imageContainerVariants = {
  hidden: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    transition: { duration: 1, when: 'beforeChildren' },
    y: 0
  }
}

const imageVariants = {
  hidden: { width: 0 },
  show: {
    transition: { duration: 2, type: 'spring' },
    width: 200
  }
}

const FeaturedProducts = ({ products }) => {
  const [featureA, featureB] = products

  return (
    <Home.FeaturedProducts>
      <Card variants={imageContainerVariants} initial='hidden' animate='show'>
        <Card.Header>
          <H3>HOODIES</H3>
        </Card.Header>
        <Card.ImageContainer>
          <Card.Image
            variants={imageVariants}
            image={getFrontImage(featureA.sku)}
          />
          <Card.Image
            variants={imageVariants}
            image={getBackImg(featureA.sku)}
          />
          <SkullText position='top-left' />
        </Card.ImageContainer>
      </Card>
      <Card variants={imageContainerVariants} initial='hidden' animate='show'>
        <Card.Header>
          <H3>CREW</H3>
        </Card.Header>
        <Card.ImageContainer bottomRight>
          <Card.Image
            variants={imageVariants}
            image={getBackImg(featureB.sku)}
          />
          <Card.Image
            variants={imageVariants}
            image={getFrontImage(featureB.sku)}
          />
          <NinjaText />
        </Card.ImageContainer>
      </Card>
    </Home.FeaturedProducts>
  )
}

const HomePage = () => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  return (
    <Layout>
      <Home>
        <SEO title='Home' />
        <Home.Header>
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
          <SocialMediaIcons />
        </Home.Body>
      </Home>
    </Layout>
  )
}

export default HomePage
