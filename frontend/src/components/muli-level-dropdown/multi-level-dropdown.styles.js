import styled from 'styled-components'
import { motion } from 'framer-motion'

const DropdownButton = styled(motion.button)`
  outline: none;
  user-select: none;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--darker);
  border: 0.1rem solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const menuWidth = '25rem'

const DropdownWrap = styled.div`
  position: absolute;
  z-index: 100;
  width: ${menuWidth};
`

const Dropdown = styled(motion.div)`
  overflow-x: hidden;
  position: relative;
  border-radius: 0.5rem;
  border-bottom: 0;
`

Dropdown.Inner = styled(motion.div)`
  transition: height 0.5s;
  width: calc(2 * ${menuWidth});
  display: flex;
  align-items: flex-start;
  background: var(--darker);
  position: relative;
  z-index: 200;
`

const Menu = styled(motion.div)`
  z-index: 2;
  background: var(--darker);
  font-size: var(--font-size-m);
  width: 100%;
  padding: 2rem 0;

  h4 {
    text-align: center;
    margin: 0 0 2rem 0;
    cursor: pointer;
  }
`

Dropdown.Categories = styled(Menu)``

Dropdown.Sizes = styled(Menu)`
  top: 0;
`

Dropdown.List = styled.ul`
  text-align: center;
  li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export { DropdownButton, Dropdown }
export default DropdownWrap
