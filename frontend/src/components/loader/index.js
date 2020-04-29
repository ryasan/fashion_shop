import React from 'react'

import Loader, { Space, Planet, Circle, Satellite, Text } from './loader.styles'

const selectedColor = color => {
  switch (color) {
    case 'red':
      return 'var(--red)'
    case 'white':
      return 'var(--off-white)'
    case 'dark':
    default:
      return 'var(--dark)'
  }
}

const LoaderComponent = ({ className, color }) => {
  const _color = selectedColor(color)

  return (
    <Loader className={className}>
      <Space color={_color}>
        <Planet>
          <Circle color={_color} />
        </Planet>
        <Satellite color={_color} />
      </Space>
      <Text color={_color}>loading</Text>
    </Loader>
  )
}

export default LoaderComponent
