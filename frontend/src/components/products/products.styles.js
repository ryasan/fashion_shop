import styled from 'styled-components'

const Products = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  flex-direction: column;
`

Products.Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Products
