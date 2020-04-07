import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: inline-block;
    border-left: 0.3rem solid red;
    padding: 1rem 2rem;
    background: white;
  }
  span {
    color: red;
  }
`

export default StyledErrorBoundary
