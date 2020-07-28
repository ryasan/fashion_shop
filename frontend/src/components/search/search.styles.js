import styled from 'styled-components'

import { motion } from 'framer-motion'

const Search = styled(motion.div)`
  position: absolute;
  color: white;
  top: 10rem;
  left: 50%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  width: 50rem;
  input {
    border-radius: 5rem;
    padding: 1rem 1rem 1rem 5rem;
    font-size: var(--font-size-lg);
    box-shadow: 0 0 0 0.3rem white;
    outline: 0;
    border: 0;
    background: var(--dark);
    caret-color: white;
    color: white;
    ::placeholder {
      color: var(--gray);
    }
  }
  svg {
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    left: 1rem;
    top: 0.4rem;
  }
`

Search.Loader = styled.div`
  position: absolute;
  top: -1.7rem;
  left: 50%;
  transform: translateX(-50%);
`

export default Search
