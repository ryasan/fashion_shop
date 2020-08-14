import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'
import { capitalCase, constantCase } from 'change-case'

import DropdownWrap, {
  Dropdown,
  Categories,
  MenuList,
  Sizes
} from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'

const ListItem = ({ index, text, onClick, initial }) => {
  const [isSelected, setIsSelected] = useState(initial)
  const handleClick = index => {
    setIsSelected(prevState => !prevState)
    onClick(index)
  }

  return (
    <MenuList.Item
      modifiers={[
        isSelected ? 'dark_color' : 'white_color',
        isSelected ? 'white' : 'dark'
      ]}
      isSelected={isSelected}
      onClick={() => handleClick(index)}
    >
      {text}
    </MenuList.Item>
  )
}

const animationSpeed = 300
const duration = animationSpeed / 1000

const slideVerticalAnimation = height => ({
  open: {
    height,
    display: 'block',
    transition: { duration }
  },
  close: {
    height: 0,
    transition: { duration },
    transitionEnd: {
      display: 'none'
    }
  }
})

const slideHorizontalAnimation = () => ({
  left: {
    x: 0,
    transition: { duration }
  },
  right: {
    x: -250,
    transition: { duration }
  }
})

const MultiLevelDropdownComponent = ({
  levels,
  leftMenuTitle,
  rightMenuTitle,
  onLeftMenuClick,
  onRightMenuClick,
  activeFilters
}) => {
  const dropdownRef = useRef(null)
  const [leftMenu, rightMenu] = levels
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const [isLeftMenu, toggleMenu] = useCycle(true, false)
  const leftMenuHeight = (leftMenu.length + 1) * 60
  const rightMenuHeight = (rightMenu.length + 1) * 60
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight

  const handleToggle = e => {
    if (!isOpen) {
      setTimeout(() => dropdownRef.current.focus(), animationSpeed)
    }
    toggleDropdown()
  }

  return (
    <DropdownWrap>
      <DropdownButton isOpen={isOpen} onClick={handleToggle} />
      <Dropdown
        tabIndex='0'
        ref={dropdownRef}
        onBlur={handleToggle}
        style={{ height }}
        initial='close'
        animate={isOpen ? 'open' : 'close'}
        variants={slideVerticalAnimation(height)}
      >
        <Dropdown.Inner
          initial='left'
          animate={isLeftMenu ? 'left' : 'right'}
          variants={slideHorizontalAnimation()}
        >
          <Categories>
            <Categories.Title onClick={toggleMenu}>
              {constantCase(leftMenuTitle)} &#8594;
            </Categories.Title>
            <MenuList>
              {leftMenu.map((value, i) => (
                <ListItem
                  key={i}
                  index={i}
                  text={capitalCase(value)}
                  initial={activeFilters.includes(value)}
                  onClick={onLeftMenuClick}
                />
              ))}
            </MenuList>
          </Categories>
          <Sizes>
            <Sizes.Title onClick={toggleMenu}>
              &#8592; {constantCase(rightMenuTitle)}
            </Sizes.Title>
            <MenuList>
              {rightMenu.map((value, i) => (
                <ListItem
                  key={i}
                  index={i}
                  text={constantCase(value)}
                  initial={activeFilters.includes(value)}
                  onClick={onRightMenuClick}
                />
              ))}
            </MenuList>
          </Sizes>
        </Dropdown.Inner>
      </Dropdown>
    </DropdownWrap>
  )
}

MultiLevelDropdownComponent.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.array).isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string)
}

export default MultiLevelDropdownComponent
