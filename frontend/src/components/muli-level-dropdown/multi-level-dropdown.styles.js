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
`

const DropdownWrap = styled.div`
  position: absolute;
  z-index: 100;
`

const Dropdown = styled(motion.div)`
  /* border: 0.2rem solid red; */
  background: var(--darker);
  border: 0.2rem solid white;
  border-radius: 0.5rem;
  overflow-x: hidden;
  position: relative;
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
    cursor: pointer;
    margin: 2.5rem 0;
    text-align: center;
  }
`

Dropdown.Categories = styled(Menu)`

  li {
    margin-bottom: 3rem !important;
  }
`

Dropdown.Sizes = styled(Menu)`
  position: absolute;
  right: 0;
  top: 0;
`

Dropdown.List = styled.ul`
  li {
    margin-bottom: 2rem;
    text-align: center;
  }
`

export { DropdownButton, Dropdown }
export default DropdownWrap
