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
  width: 20rem;
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

Search.Dropdown = styled.ul`
  background: var(--dark);
  position: relative;
  bottom: -0.3rem;
  border-radius: 0.3rem;
  text-align: center;
`

Search.Loader = styled.div`
position: absolute;
top: -1.7rem;
left: 50%;
transform: translateX(-50%);
`

Search.Item = styled.li`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0.2rem solid white;
  border-top: 0;
  border-left: 0.5rem solid var(--gray);
  &:first-child {
    border-top: 0.2rem solid white;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.3rem 0.3rem;
  }
  span {
    padding: 1rem;
  }
`

Search.ItemImage = styled.img`
  height: 5rem;
`
export default Search
