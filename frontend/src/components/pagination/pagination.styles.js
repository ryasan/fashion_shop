import styled from 'styled-components'

const Pagination = styled.div`
  width: 100%;
  font-size: var(--font-size-lg);
`

Pagination.PageControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageButton = styled.button`
  width: 3rem;
  height: 3rem;
  fill: white;
  margin: 0 3rem;
  background: 0;
  cursor: pointer;
  padding: 0.5rem;
  color: white;
  &:disabled {
    cursor: not-allowed;
    color: gray;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`

export { PageButton }
export default Pagination
