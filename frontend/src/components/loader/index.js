import React from 'react'

import Loader from './loader.styles'

const LoaderComponent = ({ className, color }) => (
  <Loader className={className}>
    <Loader.Space color={color}>
      <Loader.Planet>
        <Loader.Circle color={color} />
      </Loader.Planet>
      <Loader.Satellite color={color} />
    </Loader.Space>
    <Loader.Text color={color}>loading</Loader.Text>
  </Loader>
)

export default LoaderComponent
