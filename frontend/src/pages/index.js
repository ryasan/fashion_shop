import React from 'react'

import SEO from '../components/seo'
import Carousel from '../components/carousel/index'
import Home from '../styles/home-page.styles'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Home>
      <Carousel />
    </Home>
  </>
)

export default HomePage
