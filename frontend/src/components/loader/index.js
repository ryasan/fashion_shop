import React from 'react'

import Loader from './loader.styles'

const selectColors = color => {
  switch (color) {
    case 'white':
      return { borderOne: 'white', borderTwo: 'var(--dark)' }
    case 'dark':
    default:
      return { borderOne: 'var(--dark)', borderTwo: 'white' }
  }
}

const LoaderComponent = ({ className, color }) => {
  const colors = selectColors(color)
  return <Loader {...colors} className={className} />
}

export default LoaderComponent
