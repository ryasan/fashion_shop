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
  transition: height 0.3s;
  width: 25rem;
  z-index: 200;
`

Dropdown.Inner = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 100%;
  position: relative;
  transition: height 0.3s;
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
    border-bottom: 0.2rem solid white;
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

  li {
    cursor: pointer;
    text-align: center;

    &:hover {
      color: var(--light-gray);
    }
  }
`

export { DropdownButton, Dropdown }
export default DropdownWrap
