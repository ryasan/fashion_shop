import styled from 'styled-components'

const TakeMyMoney = styled.span`
  button {
    background: var(--darker);
    color: var(--off-white);
    font-size: var(--font_size_lg);
    padding: 1.5rem 0;
    width: 100%;
    &:focus {
      outline-color: transparent;
    }
  }
`

export default TakeMyMoney
