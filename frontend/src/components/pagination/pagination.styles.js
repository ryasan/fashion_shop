import styled from 'styled-components'

import Icon from '../icons'

const Pagination = styled.div`
  font-size: var(--font-size-lg);
  margin: 5rem 0;
  width: 100%;
`

Pagination.PageControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const PageButton = styled.button`
  background: 0;
  color: white;
  cursor: pointer;
  fill: white;
  height: 3rem;
  margin: 0 3rem;
  padding: 0.5rem;
  width: 3rem;

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`

PageButton.Icon = styled(Icon)`
  height: 100%;
  width: 100%;
`

export { PageButton }
export default Pagination
