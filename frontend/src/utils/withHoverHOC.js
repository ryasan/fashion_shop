import React, { useState } from 'react'

export const withHoverHOC = Component => props => {
  const [isHovering, setIsHovering] = useState(false)

  const handleHover = () => ({
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  })

  const moreProps = { ...props, isHovering, handleHover }

  return <Component {...moreProps} />
}
