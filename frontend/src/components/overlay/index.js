import React from 'react'

import Overlay from './overlay.styles'
import { useOverlayQuery } from '../../graphql/overlay/hooks'

const OverlayComponent = () => {
  const { data } = useOverlayQuery()

  return <Overlay active={data.overlayIsOpen} />
}

export default OverlayComponent
