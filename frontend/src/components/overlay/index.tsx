import React from 'react'

import Overlay from './overlay.styles'
import { useOverlayQuery } from '../../graphql/overlay/hooks'

const OverlayComponent = () => {
    const { data } = useOverlayQuery()

    if (data.overlayIsOpen) return <Overlay />
    return null
}

export default OverlayComponent
