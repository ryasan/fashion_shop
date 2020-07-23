import styled from 'styled-components'

const TakeMyMoney = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    width: 100%;
  }
  button {
    display: block;
    background: var(--darker);
    color: white;
    font-size: var(--font-size-lg);
    padding: 1.5rem 0;
    width: 100%;
    &:focus {
      outline-color: transparent;
    }
  }
`

export default TakeMyMoney
