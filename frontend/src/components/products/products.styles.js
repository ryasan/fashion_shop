import styled from 'styled-components'

const Products = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

Products.Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export default Products
