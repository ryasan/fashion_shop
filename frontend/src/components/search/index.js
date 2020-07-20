import React from 'react'

import Search from './search.styles'
import Icon from '../icons'
import { useAnimation } from 'framer-motion'

const fadeInUp = {
  initial: { y: '20rem', opacity: 0, scale: 0.1 },
  animate: { y: 0, translateX: '-50%', opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 1.3 }
}

const SearchComponent = () => {
  const controls = useAnimation()

  return (
    <Search {...fadeInUp}>
      <Icon name="magnifier" />
      <Search.Input
        placeholder="Search..."
        animate={controls}
        onBlur={() => controls.start({ width: '20rem' })}
        onFocus={() => controls.start({ width: '40rem' })}
      />
    </Search>
  )
}

export default SearchComponent
