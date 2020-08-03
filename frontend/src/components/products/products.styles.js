import styled from 'styled-components'

const Products = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  max-width: var(--max-width);
`

Products.Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Products
