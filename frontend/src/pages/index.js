import React from 'react'
import moment from 'moment'

import Home, {
  Foreground,
  Overlay,
  MotionBgImage,
  MotionLogo,
  SocialMedia,
  MotionIcon,
  SpecialOffer
} from '../styles/home-page.styles'
import SEO from '../components/seo'
import Icon from '../components/icons'
import { B } from '../elements'
import Sidebar from '../components/sidebar'

const fadeInUp = {
  initial: { y: '20rem', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 1.3 }
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
      <Sidebar />
      {/* <MotionBgImage>
        <MotionBgImage.Img src={bg} {...slowZoomIn} />
      </MotionBgImage>
      <Overlay /> */}
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
