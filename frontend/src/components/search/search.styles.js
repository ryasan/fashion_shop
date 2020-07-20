import styled from 'styled-components'

import { motion } from 'framer-motion'

const Search = styled(motion.div)`
  position: absolute;
  color: white;
  top: 10rem;
  left: 50%;
  z-index: 200;
  display: flex;
  input {
    width: 20rem;
    border-radius: 5rem;
    padding: 1rem 5rem;
    font-size: var(--font-size-lg);
    box-shadow: 0 0 0 0.3rem white;
    outline: 0;
    border: 0;
    background: var(--dark);
    caret-color: var(--red);
    color: white;
    ::placeholder {
      color: #aaa;
    }
  }
  svg {
    height: 100%;
    padding: 0.5rem;
    left: -2rem;
    position: absolute;
  }
`

Search.Input = styled(motion.input)`
  width: 100%;
  border-radius: 5rem;
  padding: 1rem 5rem;
  font-size: var(--font-size-lg);
  box-shadow: 0 0 0 0.3rem var(--red);
  outline: 0;
  border: 0;
  background: var(--dark);
  caret-color: white;
  color: white;
`

export default Search
