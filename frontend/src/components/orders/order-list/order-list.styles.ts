import styled from 'styled-components'

const Orders = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
    padding-top: 2rem;
`

Orders.Inner = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
`

Orders.List = styled.ul`
    align-items: center;
    display: grid;
    flex: 1;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, 25.7rem);
    justify-content: center;
    margin-top: 5rem;
    width: 100%;
`

export default Orders
