import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Footer, { Links, Subscribe, SocialMedia } from './footer.styles'
import Icon from '../../icons'

const iconParentVariants = () => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
})
const iconChildrenVariants = () => ({
  hidden: { opacity: 0 },
  show: { opacity: 1 }
})

const socials = ['facebook-outlined', 'instagram-outlined', 'twitter-outlined']

const SocialMediaComponent = () => {
  const [yEnd, setYEnd] = useState(false)

  const yPosition = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setYEnd(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', yPosition)
    return () => window.removeEventListener('scroll', yPosition)
  }, [])

  return (
    <AnimatePresence>
      {yEnd && (
        <SocialMedia
          variants={iconParentVariants()}
          initial='hidden'
          animate={yEnd ? 'show' : 'hidden'}
        >
          {socials.map((social, i) => (
            <SocialMedia.MotionIcon key={i} variants={iconChildrenVariants()}>
              <Icon name={social} />
            </SocialMedia.MotionIcon>
          ))}
        </SocialMedia>
      )}
    </AnimatePresence>
  )
}

const links = ['About us', 'Events', 'Contact', 'Privacy', 'Press']

const HomeFooterComponent = () => {
  return (
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
          Get in touch with us <Subscribe.Link>here</Subscribe.Link>
        </Subscribe.Title>
        <Subscribe.TextInput placeholder='You name' />
        <Subscribe.TextInput placeholder='Email address' />
      </Subscribe>
      <SocialMediaComponent />
    </Footer>
  )
}

export default HomeFooterComponent
