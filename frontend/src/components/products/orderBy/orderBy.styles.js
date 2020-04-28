import styled from 'styled-components'

import { Label, Select, Option } from '../../elements'

const OrderBy = styled.div`
  select {
    margin-left: 1rem;
    height: 3rem;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

OrderBy.Label = Label
OrderBy.Select = Select
OrderBy.Option = Option

export default OrderBy
