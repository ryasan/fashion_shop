import styled from 'styled-components'

import { motion } from 'framer-motion'

const Dropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% - 2.4rem);
  width: 100%;
`

Dropdown.List = styled.ul`
  background: var(--dark);
  border-left: 0.2rem solid white;
  border-radius: 0.3rem;
  max-height: 48.5rem;
  overflow-y: scroll;
  text-align: center;
  width: 100%;
`

Dropdown.Item = styled.li`
  border: 0.2rem solid white;
  border-left: ${props => (props.highlighted ? '1rem' : 0)} solid var(--darker);
  cursor: pointer;
  display: flex;
  height: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s;
  white-space: nowrap;

  &:first-child {
    border-radius: 0.3rem 0.3rem 0 0;
  }

  &:not(:first-child) {
    border-top: 0;
  }

  > span {
    background: ${props =>
      props.highlighted ? 'var(--darker)' : 'var(--dark)'};
    display: inline-block;
    flex: 1;
    line-height: 7rem;
    margin: 0;
    padding: 0 1rem;
    text-align: left;
  }
`

Dropdown.ItemImage = styled.img`
  height: 7rem;
  object-fit: cover;
  padding: 0.2rem 0;
  width: 7rem;
`

const KeepScrolling = styled(motion.div)`
  background: var(--dark);
  border: 0.2rem solid white;
  border-radius: 0 0 0.3rem 0.3rem;
  /* bottom: -49.5rem; */
  display: flex;
  flex-direction: column;
  height: 7rem;
  justify-content: flex-end;
  /* position: absolute; */
  width: calc(100% - 0.5rem);
`

KeepScrolling.Text = styled(motion.div)`
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: center;
  vertical-align: text-bottom;
  width: 100%;

  &:last-child {
    align-items: flex-start;
    font-size: 3rem;
  }
`

export { KeepScrolling }
export default Dropdown
