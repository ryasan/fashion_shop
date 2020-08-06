import styled from 'styled-components'

const Field = styled.div`
  border: 0.1rem solid white;
  border-radius: 0.3rem;
  height: 4rem;
  margin-bottom: 2rem;
  position: relative;
  
  svg {
    background: var(--dark);
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
