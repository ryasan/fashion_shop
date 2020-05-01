import styled from 'styled-components'

const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: red;
  }
  p {
    display: inline-block;
    border-left: 0.3rem solid red;
    padding: 1rem 2rem;
    background: white;
    color: red;
    border-radius: 2px;
  }
`

export default ErrorBoundary
