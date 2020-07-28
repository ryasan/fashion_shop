import styled from 'styled-components'

import { motion } from 'framer-motion'

const Dropdown = styled(motion.ul)`
  background: var(--dark);
  position: relative;
  bottom: -0.3rem;
  border-radius: 0.3rem;
  text-align: center;
  overflow-y: scroll;
  max-height: 49.2rem;
  border-left: 0.2rem solid white;
`

Dropdown.Item = styled.li`
  cursor: pointer;
  border: 0.2rem solid white;
  display: flex;
  transition: all 0.2s;
  height: 7rem;
  border-left: ${props => (props.highlighted ? '1rem' : 0)} solid var(--darker);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:first-child {
    border-radius: 0.3rem 0.3rem 0 0;
  }
  &:not(:first-child) {
    border-top: none;
  }
  & > span {
    flex: 1;
    background: ${props =>
      props.highlighted ? 'var(--darker)' : 'var(--dark)'};
    padding: 0 1rem;
    text-align: left;
    display: inline-block;
    line-height: 7rem;
    margin: 0;
  }
`

Dropdown.ItemImage = styled.img`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  padding: 0.2rem 0;
`

const KeepScrolling = styled(motion.div)`
  background: var(--dark);
  border: 0.2rem solid white;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0 0 0.3rem 0.3rem;
  position: relative;
  bottom: 0.2rem;
  width: calc(100% - 0.5rem);
`

KeepScrolling.Text = styled(motion.div)`
  flex: 1;
  display: inline-block;
  width: 100%;
  vertical-align: text-bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &:last-child {
    align-items: flex-start;
    font-size: 3rem;
  }
`

export { KeepScrolling }
export default Dropdown
