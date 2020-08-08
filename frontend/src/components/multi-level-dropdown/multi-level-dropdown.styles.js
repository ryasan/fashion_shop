import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Li, H4 } from '../../shared/elements'
import redTexture from '../../static/red-texture.png'

const DropdownWrap = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 100;
`

const DropdownButton = styled(motion.button)`
  align-items: center;
  background: url(${redTexture}) 5%;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  height: 7rem;
  justify-content: center;
  outline: none;
  pointer-events: ${props => (props.isOpen ? 'none' : 'auto')};
  position: relative;
  user-select: none;
  width: 7rem;
  z-index: 200;

  svg {
    margin: 0.4rem 0 0 0.1rem;
  }

  &::before {
    background: var(--dark);
    border-radius: 50%;
    content: '';
    height: 80%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    z-index: -1;
  }
`

const Dropdown = styled(motion.div)`
  background: var(--dark);
  border: 0.2rem solid white;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-m);
  left: 6rem;
  outline: 0;
  overflow: hidden;
  position: relative;
  top: -5rem;
  width: 25rem;
  z-index: 200;
`

Dropdown.Inner = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 100%;
  position: relative;
  width: 50rem;
`

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-lg);
  height: 100%;
  position: relative;
  width: 25rem;
`

export const Categories = styled(Menu)``

Categories.Title = styled(H4)`
  cursor: pointer;
  margin: 0;
  padding: 2rem 0;
  text-align: center;

  &:hover {
    color: var(--light-gray);
  }
`

export const Sizes = styled(Menu)`
  position: absolute;
  right: 0;
  top: 0;
`

Sizes.Title = styled(H4)`
  cursor: pointer;
  margin: 0;
  padding: 2rem 0;
  text-align: center;

  &:hover {
    color: var(--light-gray);
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`

MenuList.Item = styled(Li)`
  cursor: pointer;
  flex: 1;
  line-height: 6rem;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${props => (props.isSelected ? 'var(--dark)' : 'var(--light-gray)')};
  }
`

export { DropdownButton, Dropdown }
export default DropdownWrap
