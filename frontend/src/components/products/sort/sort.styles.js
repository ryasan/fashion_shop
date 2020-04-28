import styled from 'styled-components'

import { Label, Select, Option } from '../../elements'

const Sort = styled.div`
  flex: 1;
  select {
    margin-left: 1rem;
    height: 3rem;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

Sort.Label = Label
Sort.Select = Select
Sort.Option = Option

export default Sort
