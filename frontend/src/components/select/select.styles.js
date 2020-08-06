import styled from 'styled-components'

import { Select as Sel, Option, Label as Lab } from '../../shared/elements'

const SelectContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

export const Label = styled(Lab)``

export const Select = styled(Sel)`
  background: var(--dark);
  border: 0.1rem solid white;
  color: white;
  cursor: pointer;
  height: 3rem;
  margin-left: 1rem;
  outline-color: transparent;
`

Select.Option = styled(Option)``

export default SelectContainer
