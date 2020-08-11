import styled, { keyframes } from 'styled-components'

import { H1, H4, P, Div } from '../shared/elements'

const Home = styled.div`
  flex: 1;
  overflow-x: hidden;
`

const balloonGrow = (startingSize, targetSize) => {
  return keyframes`
  0% {
    height: ${startingSize}rem;
    width: ${startingSize}rem;
  }

  100% {
    height: ${targetSize}rem;
    width: ${targetSize}rem;
  }
`
}

export const Heading = styled.div`
  align-items: center;
  background: linear-gradient(225deg, var(--red) 50%, transparent 50%),
    var(--dark);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 7.5rem 7.5rem;
  border-radius: 0.4rem;
  border-top: 0.5rem var(--red) solid;
  box-shadow: var(--box-shadow-lg);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    animation: ${balloonGrow(35, 45)} 5s linear forwards;
    background: white;
    border-radius: 50%;
    bottom: 10rem;
    content: '';
    height: 30em;
    left: 5rem;
    opacity: 0.1;
    position: absolute;
    width: 30rem;
  }

  &::after {
    animation: ${balloonGrow(17.5, 22.5)} 5s linear forwards;
    background: white;
    border-radius: 50%;
    content: '';
    height: 10em;
    opacity: 0.1;
    position: absolute;
    right: 15rem;
    top: 5rem;
    width: 10rem;
  }
`

Heading.TextContainer = styled.div`
  color: white;
  text-align: center;
  transform: translateY(-13rem);
`

Heading.Title = styled(H1)`
  font-size: 10rem;
  font-weight: 400;
`

Heading.Subtitle = styled(H4)`
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
`

Heading.Subtext = styled(P)``

export const Body = Div

Body.Loader = styled.div`
  height: 100vh;
  position: relative;
`

export default Home
