import React, { useState } from 'react'

export const withHoverState = Component => props => {
  const [isHovering, setIsHovering] = useState(false)
  const mouseHoverProps = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }
  const moreProps = { ...props, isHovering, mouseHoverProps }

  return <Component {...moreProps} />
}
