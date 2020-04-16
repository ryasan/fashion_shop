import styled, { keyframes } from 'styled-components'

const orbit = keyframes`
to { transform: rotate(360deg); }
`

const Loader = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

Loader.Space = styled.div`
  animation: ${orbit} 1s linear infinite;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

Loader.Planet = styled.svg`
  transform: rotate(18deg);
  width: 100%;
  height: 100%;
`

const renderColor = color => {
  switch (color) {
    case 'red':
      return 'var(--red)'
    case 'white':
      return 'var(--off-white)'
    case 'dark':
    default:
      return 'var(--dark)'
  }
}

Loader.Circle = styled.circle`
  fill: transparent;
  cx: 50;
  cy: 50;
  r: 40;
  stroke-width: 2;
  stroke-dasharray: 245;
  stroke-dashoffset: 1000;
  position: relative;
  stroke: ${props => renderColor(props.color)};
`

Loader.Satellite = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  top: 50%;
  right: 0.2rem;
  transform: translateY(-50%);
  background: ${props => renderColor(props.color)};
`

Loader.Text = styled.span`
  position: absolute;
  color: ${props => renderColor(props.color)};
`

export default Loader
