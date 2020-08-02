import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'
import { capitalCase, constantCase } from 'change-case'

import DropdownWrap, {
  Dropdown,
  ListItemStyles
} from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'
import { H4 } from '../../elements'

const ListItem = ({ index, text, onClick }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = index => {
    setIsSelected(prevState => !prevState)
    onClick(index)
  }

  return (
    <ListItemStyles
      modifiers={[
        isSelected ? 'dark_color' : 'white_color',
        isSelected ? 'white' : 'dark'
      ]}
      isSelected={isSelected}
      onClick={() => handleClick(index)}
    >
      {text}
    </ListItemStyles>
  )
}

const animationSpeed = 300
const duration = animationSpeed / 1000

const slideVerticalAnimation = height => ({
  open: {
    height,
    rotateX: 0,
    display: 'block',
    transition: { duration }
  },
  close: {
    height: 0,
    rotateX: -15,
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
  onRightMenuClick
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
          <Dropdown.Categories>
            <H4 onClick={toggleMenu}>{constantCase(leftMenuTitle)} &#8594;</H4>
            <Dropdown.List>
              {leftMenu.map((text, i) => (
                <ListItem
                  key={i}
                  index={i}
                  text={capitalCase(text)}
                  onClick={onLeftMenuClick}
                />
              ))}
            </Dropdown.List>
          </Dropdown.Categories>
          <Dropdown.Sizes>
            <H4 onClick={toggleMenu}>&#8592; {constantCase(rightMenuTitle)}</H4>
            <Dropdown.List>
              {rightMenu.map((text, i) => (
                <ListItem
                  key={i}
                  index={i}
                  text={constantCase(text)}
                  onClick={onRightMenuClick}
                />
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
