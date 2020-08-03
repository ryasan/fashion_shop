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
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding: 1rem;

  span {
    color: var(--red);
  }

  p {
    color: white;
  }
`

OrderItem.Image = styled.div`
  img {
    border: 0.5rem solid var(--dark);
    height: 9rem;
    object-fit: cover;
    width: 7rem;
  }
`

OrderItem.Cost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
  width: 22%;
`

OrderItem.Info = styled.div`
  padding-right: 1rem;
  width: 60%;
`

export { OrderItem }
export default OrderDetails
