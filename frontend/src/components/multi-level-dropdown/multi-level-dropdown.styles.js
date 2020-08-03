import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Li } from '../../elements'

const DropdownWrap = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 100;
`

const DropdownButton = styled(motion.button)`
  align-items: center;
  background: var(--dark);
  border: 0.1rem solid white;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  height: 5rem;
  justify-content: center;
  outline: none;
  pointer-events: ${props => (props.isOpen ? 'none' : 'auto')};
  position: relative;
  user-select: none;
  width: 5rem;
  z-index: 9999;

  svg {
    margin: 0.4rem 0 0 0.1rem;
  }
`

const Dropdown = styled(motion.div)`
  background: var(--dark);
  border: 0.2rem solid white;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
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
  font-size: var(--font-size-m);
  height: 100%;
  position: relative;
  width: 25rem;

  h4 {
    cursor: pointer;
    margin: 0;
    padding: 2rem 0;
    text-align: center;

    &:hover {
      color: var(--light-gray);
    }
  }
`

Dropdown.Categories = styled(Menu)``

Dropdown.Sizes = styled(Menu)`
  position: absolute;
  right: 0;
  top: 0;
`

Dropdown.List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`

const ListItemStyles = styled(Li)`
  cursor: pointer;
  flex: 1;
  line-height: 6rem;
  text-align: center;

  &:hover {
    color: ${props => (props.isSelected ? 'var(--dark)' : 'var(--light-gray)')};
  }
`

export { DropdownButton, Dropdown, ListItemStyles }
export default DropdownWrap