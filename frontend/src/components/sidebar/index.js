import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useCycle } from 'framer-motion'

import Sidebar, { MotionListItem } from './sidebar.styles'

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

export default SidebarComponent
