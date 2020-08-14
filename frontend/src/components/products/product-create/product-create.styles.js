import styled from 'styled-components'

import { H3, Button } from '../../../shared/elements'
import { btns } from '../../../shared/styles'

const ProductCreate = styled.div`
  width: 100%;
`

ProductCreate.Title = H3

ProductCreate.BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
`

ProductCreate.ActionBtn = styled(Button)`
  ${btns}
  width: 15rem;

  &:hover {
    ${btns.clearWhite}
  }
`

export default ProductCreate
