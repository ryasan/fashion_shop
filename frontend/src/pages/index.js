import React from 'react'
import moment from 'moment'
import { useMediaQuery } from 'react-responsive'

import Home, {
  Foreground,
  MotionLogo,
  SocialMedia,
  MotionIcon,
  SpecialOffer
} from '../styles/home-page.styles'
import SEO from '../components/seo'
import Icon from '../components/icons'
import Sidebar from '../components/sidebar'
import Layout from '../layouts/global-layout'
import { B } from '../elements'
import { size } from '../utils'
import SearchComponent from '../components/search'

const fadeInUp = {
  initial: { y: '20rem', opacity: 0, scale: 0.1 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 1.3 }
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
  const isMobileLgScreen = useMediaQuery({
    query: `(max-width: ${size.tablet})`
  })
  const tomorrow = moment()
    .add(1, 'days')
    .format('LL')
  const HomeLayout = isMobileLgScreen ? Layout : Home

  return (
    <HomeLayout>
      <SEO title='Home' />
      <SpecialOffer>
        <B>SPECIAL OFFER:</B> Get 50% Off + FREE Shipping - Offer Ends Tomorrow
        ({tomorrow})
      </SpecialOffer>
      {!isMobileLgScreen && <Sidebar />}
      <Foreground>
        <SearchComponent />
        <MotionLogo {...fadeInUp} transition={{ delay: 1 }}>
          <Icon name='logo-jersey' />
        </MotionLogo>
        <SocialMediaIcons />
      </Foreground>
    </HomeLayout>
  )
}

export default HomePage
