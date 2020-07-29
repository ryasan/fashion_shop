import styled from 'styled-components'

const Field = styled.div`
  height: 4rem;
  position: relative;
  margin-bottom: 2rem;
  svg {
    height: 100%;
    width: 3.5rem;
    background: var(--red);
    fill: white;
    position: absolute;
    top: 50%;
    padding: 0.7rem;
    transform: translateY(-50%);
    border-radius: 3px;
  }
`

export default Field
