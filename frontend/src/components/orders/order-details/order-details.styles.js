import styled from 'styled-components'

const OrderDetails = styled.div`
  padding-top: 2rem;
  span {
    color: var(--red);
  }
  p {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
`

OrderDetails.Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`

OrderDetails.Items = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50rem;
`

const OrderItem = styled.li`
  margin-top: 2.5rem;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  span {
    color: var(--red);
  }
  p {
    color: white;
  }
`

OrderItem.Image = styled.div`
  img {
    width: 7rem;
    height: 9rem;
    object-fit: cover;
    border: 0.5rem solid var(--dark);
  }
`

OrderItem.Cost = styled.div`
  width: 22%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

OrderItem.Info = styled.div`
  width: 60%;
  padding-right: 1rem;
`

export { OrderItem }
export default OrderDetails
