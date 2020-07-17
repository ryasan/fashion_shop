import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useCycle } from 'framer-motion'
import moment from 'moment'

import Home, {
  Foreground,
  Overlay,
  Sidebar,
  MotionBgImage,
  MotionListItem,
  MotionLogo,
  SocialMedia,
  MotionIcon,
  SpecialOffer
} from '../styles/home-page.styles'
import SEO from '../components/seo'
import Icon from '../components/icons'
import { B } from '../elements'

const changeColor = {
  transition: { duration: 0.2 },
  whileHover: { color: '#000', borderColor: '#000' }
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

const slideInLeft = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 1, ease: 'easeOut' }
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

const MenuOption = ({ name, to, idx, animationsProp }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [animations, cycleAnimations] = useCycle(...animationsProp)

  useEffect(cycleAnimations, [])

  return (
    <MotionListItem
      {...animations}
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Link to={to}>{name}</Link>
    </MotionListItem>
  )
}

const menuOptions = [
  {
    name: 'Shop',
    to: '/shop/',
    animationsProp: [fadeInUp, changeColor],
    idx: 0
  },
  {
    name: 'Signin',
    to: '/signin/',
    animationsProp: [
      { ...fadeInUp2, transition: { duration: 0.5, delay: 1.6 } },
      changeColor
    ],
    idx: 1
  }
]

const SidebarComponent = () => (
  <Sidebar {...slideInLeft}>
    <Sidebar.List>
      <MenuOption {...menuOptions[0]} />
      <MenuOption {...menuOptions[1]} />
    </Sidebar.List>
    <Sidebar.Text {...slideInLeft} transition={{ delay: 1.9 }}>
      Men’s clothing to keep you dressed your best 365 days a year.
    </Sidebar.Text>
  </Sidebar>
)

const socials = ['facebook', 'instagram', 'twitter']

const SocialMediaIcons = () => (
  <SocialMedia>
    {socials.map((social, i) => (
      <MotionIcon key={i} {...fadeInUp} transition={{ delay: i / 3 + 2.2 }}>
        <Icon name={social} />
      </MotionIcon>
    ))}
  </SocialMedia>
)

const HomePage = () => {
  const bg = require('../images/home-bg.svg')
  const tomorrow = moment()
    .add(1, 'days')
    .format('LL')

  return (
    <Home>
      <SEO title="Home" />
      <SidebarComponent />
      <MotionBgImage>
        <MotionBgImage.Img src={bg} {...slowZoomIn} />
      </MotionBgImage>
      <Overlay />
      <Foreground {...slideInDown}>
        <Foreground.One>
          <SpecialOffer>
            <B>SPECIAL OFFER:</B> Get 50% Off + FREE Shipping - Offer Ends
            Tomorrow ({tomorrow})
          </SpecialOffer>
          <MotionLogo {...fadeInUp} transition={{ delay: 1 }}>
            <Icon name="logo-jersey" />
          </MotionLogo>
          <SocialMediaIcons />
        </Foreground.One>
        <Foreground.Two />
      </Foreground>
    </Home>
  )
}

export default HomePage
