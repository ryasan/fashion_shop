import React from 'react'

import Loader from './loader.styles'

const selectColors = color => {
  switch (color) {
    case 'dark':
      return { borderOne: 'var(--dark)', borderTwo: 'white' }
    case 'white':
    default:
      return { borderOne: 'white', borderTwo: 'var(--dark)' }
  }
}

const LoaderComponent = ({ className, color }) => {
  const colors = selectColors(color)
  return <Loader {...colors} className={className} />
}

export default LoaderComponent
