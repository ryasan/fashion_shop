import styled, { css } from 'styled-components'
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

const DropdownWrap = styled.div`
  position: absolute;
  z-index: 100;
  width: 25rem;
`

const Dropdown = styled(motion.div)`
  position: relative;
`

Dropdown.Inner = styled(motion.div)`
  outline: 2px solid red;
  width: 100%;
  background: var(--darker);
  transition: height 0.5s;
`

const Menu = styled(motion.div)`
  z-index: 2;
  border-radius: 5px;
  position: absolute;
  background: var(--darker);
  font-size: var(--font-size-m);
  width: 100%;
  padding: 2rem 0;
  h4 {
    text-align: center;
    margin: 2rem;
    cursor: pointer;
  }
`

Dropdown.Categories = styled(Menu)`
  position: relative;
`

Dropdown.Sizes = styled(Menu)`
  top: 0;
  transform: translateX(100%);
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
