import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0%{ transform: rotate(0deg); }
100%{ transform: rotate(360deg); }
`

const Loader = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1rem solid transparent;
    border-top-color: ${props => props.primary};
    border-bottom-color: ${props => props.primary};
  }

  &:before {
    z-index: 100;
    animation: ${spin} 1s infinite;
  }

  &:after {
    border: 1rem solid ${props => props.secondary};
  }

  > div {
    background: ${props => props.primary};
  }
`

Loader.Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`

export default Loader
