import styled from 'styled-components'

import { motion } from 'framer-motion'
import { device } from '../../shared/utils'
import Icon from '../icons'

const Search = styled(motion.div)`
  align-items: center;
  color: white;
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  z-index: 200;

  @media ${device.tablet} {
    width: 20rem !important;
  }
`

Search.InputField = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 90%;

  > input {
    background: var(--dark);
    border: 0.5rem solid var(--red);
    border-radius: 0.5rem;
    caret-color: white;
    color: white;
    font-size: var(--font-size-lg);
    outline: 0;
    padding: 1rem 1rem 1rem 5rem;
    position: absolute;
    width: 100%;

    ::placeholder {
      color: var(--gray);
    }
  }
`

Search.Icon = styled(Icon)`
  color: var(--red);
  height: 3rem;
  margin-left: 1.5rem;
  width: 3rem;
  z-index: 1000;
`

Search.Loader = styled.div`
  left: 50%;
  position: absolute;
  top: -1.7rem;
  transform: translateX(-50%);
`

export default Search
