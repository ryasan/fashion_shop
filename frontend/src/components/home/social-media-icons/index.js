import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Icon from '../../icons'
import SocialMedia from './social-media-icon.styles'

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

export default SocialMediaComponent
