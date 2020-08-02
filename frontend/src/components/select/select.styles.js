import styled from 'styled-components'

const Select = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  select {
    background: var(--dark);
    border: 0.1rem solid white;
    color: white;
    cursor: pointer;
    height: 3rem;
    margin-left: 1rem;
    outline-color: transparent;
  }
`

export default Select
