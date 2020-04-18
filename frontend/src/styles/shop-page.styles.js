import styled from 'styled-components'

import Loader from '../components/loader'
import { device } from '../utils'

const Shop = styled.div`
  margin: 3rem 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

Shop.ProductsContainer = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 5rem;
  justify-items: center;
  align-items: center;
  @media ${device.mobileL} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

Shop.Loader = Loader

export default Shop
