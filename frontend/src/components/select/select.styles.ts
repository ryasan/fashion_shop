import styled from 'styled-components'

import { Select as Sel, Option, Label as Lab } from '../../shared/elements'

const Select = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

Select.Label = styled(Lab)``

Select.Dropdown = styled(Sel)`
  background: var(--dark);
  border: 0.1rem solid white;
  color: white;
  cursor: pointer;
  height: 3rem;
  margin-left: 1rem;
  outline-color: transparent;
`

Select.Option = styled(Option)``

export default Select
