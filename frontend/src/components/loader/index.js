import React from 'react'

import Loader from './loader.styles'

const setColors = color => {
  switch (color) {
    case 'dark':
      return { primary: 'var(--dark)', secondary: 'white' }
    case 'white':
    default:
      return { primary: 'white', secondary: 'var(--dark)' }
  }
}

const setSize = size => {
  switch (size) {
    case 'small':
      return { loader: '5rem', dot: '0.5rem', border: '0.5rem' }
    case 'medium':
    default:
      return { loader: '10rem', dot: '1rem', border: '1rem' }
  }
}

const LoaderComponent = ({ className, color, size }) => {
  const colors = setColors(color)
  const _size = setSize(size)
  return (
    <Loader {...colors} size={_size} className={className}>
      <Loader.Dot size={_size} />
    </Loader>
  )
}

export default LoaderComponent
