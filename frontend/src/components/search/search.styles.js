import styled from 'styled-components'

import { motion } from 'framer-motion'

const Search = styled(motion.div)`
  color: white;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 10rem;
  width: 50rem;
  z-index: 200;

  input {
    background: var(--dark);
    border: 0;
    border-radius: 5rem;
    box-shadow: 0 0 0 0.3rem white;
    caret-color: white;
    color: white;
    font-size: var(--font-size-lg);
    outline: 0;
    padding: 1rem 1rem 1rem 5rem;

    ::placeholder {
      color: var(--gray);
    }
  }

  svg {
    height: 3.5rem;
    left: 1rem;
    position: absolute;
    top: 0.4rem;
    width: 3.5rem;
  }
`

Search.Loader = styled.div`
  left: 50%;
  position: absolute;
  top: -1.7rem;
  transform: translateX(-50%);
`

export default Search
