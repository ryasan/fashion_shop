import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Icon from '../../icons'
import SocialMedia from './social-media-icon.styles'

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

const SocialMediaComponent = () => {
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
            <SocialMedia.MotionIcon key={i} variants={iconChildrenVariants}>
              <Icon name={social} />
            </SocialMedia.MotionIcon>
          ))}
        </SocialMedia>
      )}
    </AnimatePresence>
  )
}

export default SocialMediaComponent
