import React, { useState, useEffect } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import Home, {
  Heading,
  Body,
  Links,
  Subscribe,
  Footer
} from '../styles/home-page.styles'
import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import FeaturedProducts from '../components/home/featured-products'
import SocialMedia from '../components/home/social-media-icons'
import BodyContent from '../components/home/body-content'
import ScrollProgress from '../components/home/scroll-progress'
import { Span } from '../shared/elements'
import { useProductsQuery } from '../graphql/product/hooks'

const links = ['About us', 'Events', 'Contact', 'Privacy', 'Press']

const HomePage = () => {
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress)
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  const handleChange = y => {
    setPct(Math.min(Math.ceil(y * 100), 100))
  }

  useEffect(() => {
    yRange.onChange(handleChange)
  }, [yRange])

  return (
    <Layout>
      <Home>
        <SEO title='Home' />
        <ScrollProgress pct={pct} />
        <Heading>
          <Heading.TextContainer>
            <Heading.Title>E <Span modifiers='red_color'>&</Span> S Streetware</Heading.Title>
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
          <BodyContent pct={pct} />
        </Body>
        <Footer>
          <Links>
            <Links.Title>Quick links</Links.Title>
            <Links.List>
              {links.map((link, i) => (
                <Links.ListItem key={i}>
                  <Links.Link>{link}</Links.Link>
                </Links.ListItem>
              ))}
            </Links.List>
          </Links>
          <Subscribe>
            <Subscribe.Title>
              Get in touch with us <Span>here</Span>
            </Subscribe.Title>
            <Subscribe.TextInput placeholder='You name' />
            <Subscribe.TextInput placeholder='Email address' />
          </Subscribe>
          <SocialMedia />
        </Footer>
      </Home>
    </Layout>
  )
}

export default HomePage
