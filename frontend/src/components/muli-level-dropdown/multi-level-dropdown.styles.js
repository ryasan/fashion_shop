import styled from 'styled-components'
import { motion } from 'framer-motion'

const DropdownButton = styled(motion.button)`
  align-items: center;
  background: var(--darker);
  border: 0.1rem solid white;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  height: 5rem;
  justify-content: center;
  outline: none;
  user-select: none;
  width: 5rem;

  svg {
    margin: 0.4rem 0 0 0.1rem;
  }
`

const DropdownWrap = styled.div`
  position: absolute;
  z-index: 100;
`

const Dropdown = styled(motion.div)`
  background: var(--darker);
  border: 0.2rem solid white;
  border-radius: 0.5rem;
  left: 6rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.5s;
  width: 25rem;
  z-index: 200;
`

Dropdown.Inner = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 100%;
  outline: 4px solid red;
  position: relative;
  transition: height 0.5s;
  width: 50rem;
`

const Menu = styled(motion.div)`
  font-size: var(--font-size-m);
  position: relative;
  width: 25rem;

  h4 {
    border-bottom: 0.2rem solid white;
    cursor: pointer;
    margin: 0;
    padding: 2rem 0;
    text-align: center;

    &:hover {
      background: white;
      color: var(--darker);
    }
  }
`

Dropdown.Categories = styled(Menu)`
  li {
    margin-bottom: 3rem !important;
  }
`

Dropdown.Sizes = styled(Menu)`
  padding-bottom: 3rem;
  position: absolute;
  right: 0;
  top: 0;
`

Dropdown.List = styled.ul`
  padding-top: 3rem;

  li {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export { DropdownButton, Dropdown }
export default DropdownWrap
