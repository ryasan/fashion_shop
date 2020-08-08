export const useAnimations = props => {
  const {
    finalOpacity = 1,
    finalWidth = 300,
    initialX = 300,
    finalX = 300,
    finalHeight = 300
  } = props

  const fadeIn = () => ({
    initial: { opacity: 0 },
    final: { opacity: finalOpacity }
  })
  const horizontalReveal = () => ({
    initial: { width: 0 },
    final: { width: finalWidth }
  })
  const slideInLeft = () => ({
    initial: { x: initialX },
    final: { x: 0 }
  })
  const slideOutRight = () => ({
    initial: { x: 0 },
    final: { x: finalX }
  })
  const verticalReveal = () => ({
    final: {
      height: finalHeight,
      display: 'block'
    },
    initial: {
      height: 0,
      transitionEnd: {
        display: 'none'
      }
    }
  })
  const zoomIn = ({ finalScale = 1.2 }) => ({
    initial: { scale: 1 },
    final: { scale: finalScale }
  })

  return {
    fadeIn,
    horizontalReveal,
    slideInLeft,
    slideOutRight,
    verticalReveal,
    zoomIn
  }
}

useAnimations.defaultProps = {
  finalOpacity: 1,
  finalWidth: 300,
  initialX: 300,
  finalX: 300,
  finalHeight: 300
}

const enterAnimations = {
  fadeIn: ({ finalOpacity = 1 }) => ({
    initial: { opacity: 0 },
    final: { opacity: finalOpacity }
  }),
  horizontalReveal: ({ finalWidth = 300 }) => ({
    initial: { width: 0 },
    final: { width: finalWidth }
  }),
  slideInLeft: ({ initialX = 300 }) => ({
    initial: { x: initialX },
    final: { x: 0 }
  }),
  slideOutRight: ({ finalX = 300 }) => ({
    initial: { x: 0 },
    final: { x: finalX }
  }),
  verticalReveal: ({ finalHeight = 300 }) => ({
    final: {
      height: finalHeight,
      display: 'block'
    },
    initial: {
      height: 0,
      transitionEnd: {
        display: 'none'
      }
    }
  }),
  zoomIn: ({ finalScale = 1.2 }) => ({
    initial: { scale: 1 },
    final: { scale: finalScale }
  })
}

export default enterAnimations
