import styled from 'styled-components'

import { H3, Button } from '../../../shared/elements'
import { btns } from '../../../shared/styles'

const ProductUpdate = styled.div`
  width: 100%;
`

ProductUpdate.Title = H3

ProductUpdate.BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
`

ProductUpdate.ActionBtn = styled(Button)`
  ${btns.white}
  width: 15rem;

  ${btns.white}
  width: 15rem;
  &:hover {
    ${btns.clearWhite}
  }

  &:first-child {
    ${btns.clearWhite}

    &:hover {
      ${btns.clearRed}
    }
  }
`

export default ProductUpdate
