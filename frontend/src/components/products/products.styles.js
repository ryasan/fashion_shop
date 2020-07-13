import styled from 'styled-components'

const Products = styled.div`
  max-width: var(--max-width);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: blue; */
  flex-grow: 1;
`

Products.Container = styled.div`
  flex: 1;
  display: flex;
  /* background: red; */
  align-items: center;
  height: 100%;
`

export default Products
