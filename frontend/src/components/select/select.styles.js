import styled from 'styled-components'

import { Select as Sel } from '../../elements'

const SelectContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

export const Select = styled(Sel)`
  background: var(--dark);
  border: 0.1rem solid white;
  color: white;
  cursor: pointer;
  height: 3rem;
  margin-left: 1rem;
  outline-color: transparent;
`
export default SelectContainer
