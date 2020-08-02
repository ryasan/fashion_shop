import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'

import DropdownWrap, { Dropdown } from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'
import { H4, Li } from '../../elements'

const toggleMenuAnimate = {
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

const menuSlideAnimate = {
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

const MultiLevelDropdownComponent = ({ levels }) => {
  const [categories, sizes] = levels
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const [isLeftMenu, toggleMenu] = useCycle(true, false)
  const categoriesRef = useRef(null)
  const sizesRef = useRef(null)
  const [menuHeight, setMenuHeights] = useState({})
  const height = isLeftMenu ? menuHeight.categories : menuHeight.sizes

  const getHeights = () => {
    setMenuHeights({
      categories: categoriesRef.current.offsetHeight,
      sizes: sizesRef.current.offsetHeight
    })
  }

  console.log(height)

  return (
    <DropdownWrap>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen} />
      <Dropdown
        initial='close'
        animate={isOpen ? 'open' : 'close'}
        variants={toggleMenuAnimate}
        onAnimationComplete={getHeights}
      >
        <Dropdown.Inner
          style={{ height }}
          initial='left'
          animate={isLeftMenu ? 'left' : 'right'}
          variants={menuSlideAnimate}
        >
          <Dropdown.Categories ref={categoriesRef}>
            <H4 onClick={toggleMenu}>Sizes &#8594;</H4>
            <Dropdown.List>
              {categories.map((text, i) => (
                <Li key={i}>{text.toUpperCase()}</Li>
              ))}
            </Dropdown.List>
          </Dropdown.Categories>
          <Dropdown.Sizes ref={sizesRef}>
            <H4 onClick={toggleMenu}>&#8592; Categories</H4>
            <Dropdown.List>
              {sizes.map((text, i) => (
                <Li key={i}>{text}</Li>
              ))}
            </Dropdown.List>
          </Dropdown.Sizes>
        </Dropdown.Inner>
      </Dropdown>
    </DropdownWrap>
  )
}

MultiLevelDropdownComponent.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default MultiLevelDropdownComponent
