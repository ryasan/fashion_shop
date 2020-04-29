import styled from 'styled-components'

const Account = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`

const Details = styled.div`
  max-width: var(--max-width);
  width: 100%;
  button {
    padding: 1rem 2rem;
    border-radius: 2px;
    outline-color: var(--red);
  }
  p {
    margin-bottom: 2rem;
  }
`

export { Details }
export default Account
