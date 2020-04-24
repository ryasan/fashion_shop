import styled from 'styled-components'

import { H4 } from '../../elements'

const Filter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
`

Filter.Sizes = styled.ul`
  display: flex;
`

Filter.SingleSize = styled.li`
  width: 4rem;
  height: 4rem;
  background: ${props => (props.isSelected ? 'black' : 'var(--off-white)')};
  color: ${props => (props.isSelected ? 'var(--off-white)' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isSelected ? 'var(--off-white)' : 'black')};
  margin-left: 1rem;
  font-size: var(--small-font);
  cursor: pointer;
  &:hover {
    background: ${props => (props.isSelected ? 'var(--dark)' : '#dfdfdf')}
`

Filter.Title = styled(H4)`
  background: var(--dark);
  color: var(--off-white);
  height: 100%;
  display: flex;
  align-items: center;
`

export default Filter
