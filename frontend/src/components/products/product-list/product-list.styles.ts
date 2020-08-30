import styled from 'styled-components'

const ProductList = styled.ul`
    align-items: center;
    display: grid;
    flex: 1;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fill, 31rem);
    justify-content: center;
    margin: 5rem 0;
    width: 100%;
`

export default ProductList
