export const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      mass: 0.8
    },
    display: 'block'
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  right: {
    x: -250,
    transition: {
      duration: 0.5
    }
  }
}
