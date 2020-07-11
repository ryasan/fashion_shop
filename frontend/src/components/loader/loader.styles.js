import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0%{ transform: rotate(0deg); }
100%{ transform: rotate(360deg); }
`

const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: ${props => props.borderOne};
    border-bottom-color: ${props => props.borderOne};
  }

  &:before {
    z-index: 100;
    animation: ${spin} 1s infinite;
  }

  &:after {
    border: 10px solid ${props => props.borderTwo};
  }
`

export default Loader
