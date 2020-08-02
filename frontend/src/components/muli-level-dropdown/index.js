import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'
import { capitalCase } from 'change-case'

import DropdownWrap, { Dropdown } from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'
import { H4, Li } from '../../elements'
import { menuVariants, slideHorizontalAnimation, slideVerticalAnimation } from './animation-variants'

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

  return (
    <DropdownWrap>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen} />
      <Dropdown
        style={{ height }}
        initial='close'
        animate={isOpen ? 'open' : 'close'}
        variants={slideVerticalAnimation}
        onAnimationComplete={getHeights}
      >
        <Dropdown.Inner
          initial='left'
          animate={isLeftMenu ? 'left' : 'right'}
          variants={slideHorizontalAnimation}
          style={{ height }}
        >
          <Dropdown.Categories ref={categoriesRef}>
            <H4 onClick={toggleMenu}>Sizes &#8594;</H4>
            <Dropdown.List>
              {categories.map((text, i) => (
                <Li key={i}>{capitalCase(text)}</Li>
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
