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
    border: 0;
    border-radius: 5rem;
    box-shadow: 0 0 0 0.3rem white;
    caret-color: white;
    color: white;
    font-size: var(--font-size-m);
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
  height: 3.5rem;
  left: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  z-index: 1000;
`

Search.Loader = styled.div`
  left: 50%;
  position: absolute;
  top: -1.7rem;
  transform: translateX(-50%);
`

export default Search
