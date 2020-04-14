import styled, { keyframes } from 'styled-components'

const orbit = keyframes`
to { transform: rotate(360deg); }
`

const Loader = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  background: var(--darker);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

Loader.Text = styled.span`
  color: var(--off-white);
`

Loader.Circle = styled.div`
  position: absolute;
  border: 2px solid var(--off-white);
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  animation: ${orbit} 1s linear infinite;
  &:after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--off-white);
    border-radius: 50%;
    border: 0.5rem solid var(--darker);
    top: -1.1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default Loader
