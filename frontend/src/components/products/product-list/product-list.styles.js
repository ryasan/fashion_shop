import styled from 'styled-components'

import { device } from '../../../utils'
import Loader from '../../loader'

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

ProductList.Loader = Loader

export default ProductList
