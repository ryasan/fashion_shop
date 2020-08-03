import styled, { keyframes } from 'styled-components'

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: ${props => props.size?.loader};
  justify-content: center;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size?.loader};

  &::before,
  &::after {
    border: ${props => props.size?.border} solid transparent;
    border-bottom-color: ${props => props.primary};
    border-radius: 100%;
    border-top-color: ${props => props.primary};
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }

  &::before {
    animation: ${spin} 1s infinite;
    z-index: 100;
  }

  &::after {
    border: ${props => props.size?.border} solid ${props => props.secondary};
  }

  > div {
    background: ${props => props.primary};
  }
`

Loader.Dot = styled.div`
  border-radius: 50%;
  height: ${props => props.size?.dot};
  width: ${props => props.size?.dot};
`

export default Loader
