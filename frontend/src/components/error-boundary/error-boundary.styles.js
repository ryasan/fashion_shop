import styled from 'styled-components'

const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: red;
  }

  p {
    background: white;
    border-left: 0.3rem solid red;
    color: red;
    display: inline-block;
    padding: 1rem 2rem;
  }
`

export default ErrorBoundary
