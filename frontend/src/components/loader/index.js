import React from 'react'

import Loader from './loader.styles'

const LoaderComponent = ({ className }) => (
  <Loader className={className}>
    <Loader.Circle />
    <Loader.Text>loading</Loader.Text>
  </Loader>
)

export default LoaderComponent
