import React from 'react'

import Loader from './loader.styles'

const selectColors = color => {
  switch (color) {
    case 'dark':
      return { primary: 'var(--dark)', secondary: 'white' }
    case 'white':
    default:
      return { primary: 'white', secondary: 'var(--dark)' }
  }
}

const LoaderComponent = ({ className, color }) => {
  const colors = selectColors(color)
  return (
    <Loader {...colors} className={className}>
      <Loader.Dot />
    </Loader>
  )
}

export default LoaderComponent
