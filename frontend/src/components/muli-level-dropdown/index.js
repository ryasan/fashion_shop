import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'
import { capitalCase } from 'change-case'

import DropdownWrap, { Dropdown } from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'
import { H4, Li } from '../../elements'
import { useDimensions } from './hooks'

const toggleMenuAnimate = {
  open: {
    rotateX: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5
    },
    display: 'block'
  },
  close: {
    rotateX: -15,
    y: -320,
    transition: {
      type: 'spring',
      duration: 0.5,
      delay: 0.3
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

const slideLeft = {
  visible: {
    x: 0,
    transition: {
      duration: 0.5
    },
    display: 'block'
  },
  hidden: {
    x: -250,
    transition: {
      duration: 0.5
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

const slideRight = {
  visible: {
    x: 0,
    transition: {
      duration: 0.5
    },
    display: 'block'
  },
  hidden: {
    x: 250,
    transition: {
      duration: 0.5
    },
    transitionEnd: {
      display: 'block'
    }
  }
}

// const changeHeight = height => {
//   categoryView: {
//     height: height
//   }
// }

const MultiLevelDropdownComponent = ({ levels }) => {
  const [categories, sizes] = levels
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const [isFirstMenu, toggleMenu] = useCycle(true, false)
  const categoriesRef = useRef(null)
  const sizesRef = useRef(null)
  const [menuHeight, setMenuHeights] = useState({})

  useEffect(() => {
    console.log(menuHeight)
  }, [menuHeight])

  const getHeights = () => {
    setMenuHeights({
      categories: categoriesRef.current.offsetHeight,
      sizes: sizesRef.current.offsetHeight
    })
  }

  return (
    <DropdownWrap>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen} />
      <Dropdown>
        <Dropdown.Inner
          initial='close'
          animate={isOpen ? 'open' : 'close'}
          variants={toggleMenuAnimate}
          onAnimationComplete={getHeights}
          style={{
            height: isFirstMenu ? menuHeight.categories : menuHeight.sizes
          }}
        >
          <Dropdown.Categories
            initial='visible'
            animate={isFirstMenu ? 'visible' : 'hidden'}
            variants={slideLeft}
            ref={categoriesRef}
          >
            <H4 onClick={toggleMenu}>Sizes &#8594;</H4>
            <Dropdown.List>
              {categories.map((text, i) => (
                <Li key={i}>{capitalCase(text)}</Li>
              ))}
            </Dropdown.List>
          </Dropdown.Categories>
          <Dropdown.Sizes
            ref={sizesRef}
            initial='hidden'
            animate={isFirstMenu ? 'hidden' : 'visible'}
            variants={slideRight}
          >
            <H4 onClick={toggleMenu}>&#8592; Categories</H4>
            <Dropdown.List>
              {sizes.map((text, i) => (
                <Li key={i}>{capitalCase(text)}</Li>
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
