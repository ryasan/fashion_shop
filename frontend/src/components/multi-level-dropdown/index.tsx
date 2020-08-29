import React, { useRef } from 'react'
import { useCycle } from 'framer-motion'
import { capitalCase, constantCase } from 'change-case'

import DropdownWrap, {
  Dropdown,
  Categories,
  MenuList,
  Sizes
} from './multi-level-dropdown.styles'
import DropdownButton from './dropdown-button'

const ListItem: React.StatelessComponent<{
  onClick: (idx: number) => void
  isSelected: boolean
  index: number
  text: string
}> = ({ onClick, isSelected, index, text }) => (
  <MenuList.Item
    modifiers={[
      isSelected ? 'dark_color' : 'white_color',
      isSelected ? 'white' : 'dark'
    ]}
    isSelected={isSelected}
    onClick={() => onClick(index)}
  >
    {text}
  </MenuList.Item>
)

const animationSpeed = 300
const duration = animationSpeed / 1000

const slideVerticalAnimation = (height: number) => ({
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

interface PropsInterface {
  activeFilters: string[]
  levels: Array<string[]>
  leftMenuTitle: string
  rightMenuTitle: string
  onLeftMenuClick: (idx: number) => void
  onRightMenuClick: (idx: number) => void
}

const MultiLevelDropdownComponent: React.FC<PropsInterface> = ({
  levels,
  leftMenuTitle,
  rightMenuTitle,
  onLeftMenuClick,
  onRightMenuClick,
  activeFilters
}) => {
  const dropdownRef = useRef<HTMLDivElement>()
  const [leftMenu, rightMenu] = levels
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const [isLeftMenu, toggleMenu] = useCycle(true, false)
  const leftMenuHeight = (leftMenu.length + 1) * 60
  const rightMenuHeight = (rightMenu.length + 1) * 60
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight

  const handleToggle = () => {
    if (!isOpen && dropdownRef?.current) {
      setTimeout(() => dropdownRef?.current?.focus(), animationSpeed)
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
                  isSelected={activeFilters.includes(value)}
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
                  isSelected={activeFilters.includes(value)}
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

export default MultiLevelDropdownComponent
