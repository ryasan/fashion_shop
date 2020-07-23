import React from 'react'
import PropTypes from 'prop-types'

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

const LoaderComponent = ({ className, color, size = 'medium' }) => {
  const colors = setColors(color)
  const _size = setSize(size)
  const classNames = className ? `loader ${className}` : 'loader'

  return (
    <Loader {...colors} size={_size} className={classNames}>
      <Loader.Dot size={_size} />
    </Loader>
  )
}

LoaderComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
}

export default LoaderComponent
