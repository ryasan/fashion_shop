import styled from 'styled-components'

const Field = styled.div`
  height: 4rem;
  margin-bottom: 2rem;
  position: relative;
  
  svg {
    background: var(--red);
    border-radius: 3px;
    fill: white;
    height: 100%;
    padding: 0.7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3.5rem;
  }
`

export default Field
