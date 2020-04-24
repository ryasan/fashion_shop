import styled from 'styled-components'

import Loader from '../../loader'
import { device } from '../../../utils'
import { P } from '../../elements'

const ProductList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 5rem;
  justify-items: center;
  align-items: center;
  flex: 1;
  @media ${device.mobileL} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

ProductList.Text = P
ProductList.Loader = Loader

export default ProductList
