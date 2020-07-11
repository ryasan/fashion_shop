import styled from 'styled-components'

const ProductList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-gap: 6rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export default ProductList
