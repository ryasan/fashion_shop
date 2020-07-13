import styled from 'styled-components'

const ProductList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 31rem);
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 3rem 0;
`

export default ProductList
