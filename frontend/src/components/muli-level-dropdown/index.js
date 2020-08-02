import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useCycle } from 'framer-motion'
import { capitalCase, constantCase } from 'change-case'

import DropdownWrap, {
  Dropdown,
  ListItemStyles
} from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'
import { H4, A } from '../../elements'

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

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: 'spring'
    },
    display: 'block'
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3
    }
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3
    }
  }
}

const MultiLevelDropdownComponent = ({
  levels,
  leftMenuTitle,
  rightMenuTitle,
  onLeftMenuClick,
  onRightMenuClick
}) => {
  const [leftMenu, rightMenu] = levels
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const [isLeftMenu, toggleMenu] = useCycle(true, false)
  const leftMenuHeight = (leftMenu.length + 1) * 60
  const rightMenuHeight = (rightMenu.length + 1) * 60
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight

  return (
    <DropdownWrap>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen} />
      <A onBlur={toggleDropdown}>
        <Dropdown
          tabIndex={0}
          style={{ height }}
          initial='close'
          animate={isOpen ? 'open' : 'close'}
          variants={slideVerticalAnimation}
        >
          <Dropdown.Inner
            initial='left'
            animate={isLeftMenu ? 'left' : 'right'}
            variants={slideHorizontalAnimation}
          >
            <Dropdown.Categories>
              <H4 onClick={toggleMenu}>
                {constantCase(leftMenuTitle)} &#8594;
              </H4>
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
              <H4 onClick={toggleMenu}>
                &#8592; {constantCase(rightMenuTitle)}
              </H4>
              <Dropdown.List>
                {rightMenu.map((text, i) => (
                  <ListItem
                    key={i}
                    index={i}
                    text={capitalCase(text)}
                    onClick={onRightMenuClick}
                  />
                ))}
              </Dropdown.List>
            </Dropdown.Sizes>
          </Dropdown.Inner>
        </Dropdown>
      </A>
    </DropdownWrap>
  )
}

MultiLevelDropdownComponent.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default MultiLevelDropdownComponent
