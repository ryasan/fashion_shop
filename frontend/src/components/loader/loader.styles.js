import styled, { keyframes } from 'styled-components'

const orbit = keyframes`
to { transform: rotate(360deg); }
`

const Loader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Space = styled.div`
  animation: ${orbit} 1s linear infinite;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Planet = styled.svg`
  transform: rotate(18deg);
  width: 100%;
  height: 100%;
`

const Circle = styled.circle`
  fill: transparent;
  cx: 50;
  cy: 50;
  r: 40;
  stroke-width: 2;
  stroke-dasharray: 245;
  stroke-dashoffset: 1000;
  position: relative;
  stroke: ${props => props.color};
`

const Satellite = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  background: ${props => props.color};
`

const Text = styled.span`
  position: absolute;
  color: ${props => props.color};
`

export { Space, Planet, Circle, Text, Satellite }
export default Loader
