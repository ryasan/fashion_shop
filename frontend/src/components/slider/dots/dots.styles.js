import styled from 'styled-components'

const DotList = styled.ul`
  display: flex;
  margin-top: 3rem;
`

export const Dot = styled.li`
  background: var(--red);
  cursor: pointer;
  height: 0.5rem;
  opacity: ${props => (props.isActive ? 1 : 0.2)};
  width: 3rem;

  &:not(:first-child) {
    margin-left: 0.8rem;
  }
`

export default DotList
