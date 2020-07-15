import React from 'react'
import { Link } from 'gatsby'

import Home, {
  Foreground,
  Overlay,
  Sidebar,
  MotionBgImage,
  MotionListItem,
  MotionLogo
} from '../styles/home-page.styles'
import SEO from '../components/seo'
import Icon from '../components/icons'

const slideInLeft = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 1, ease: 'easeOut' }
}
const fadeInUp = {
  initial: { y: '20rem', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 1.3 }
}
const fadeInUp2 = {
  initial: { y: '20rem', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 1.6 }
}

const SidebarComponent = () => {
  return (
    <Sidebar {...slideInLeft}>
      <Sidebar.List>
        <Link to="/shop/">
          <MotionListItem {...fadeInUp}>Shop</MotionListItem>
        </Link>
        <Link to="/signin/">
          <MotionListItem {...fadeInUp2}>Signin</MotionListItem>
        </Link>
      </Sidebar.List>
      <Sidebar.Text>
        Men’s clothing to keep you dressed your best 365 days a year.
      </Sidebar.Text>
    </Sidebar>
  )
}

const slideInDown = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  transition: { duration: 1 }
}

const slowZoomIn = {
  animate: { scale: 1.1 },
  transition: { duration: 5 }
}

const HomePage = () => {
  return (
    <Home>
      <SEO title="Home" />
      <SidebarComponent />
      <MotionBgImage {...slowZoomIn} />
      <Overlay />
      <Foreground {...slideInDown}>
        <Foreground.One>
          <MotionLogo>
            <Icon name="logo-jersey" />
          </MotionLogo>
        </Foreground.One>
        <Foreground.Two />
      </Foreground>
    </Home>
  )
}

export default HomePage
