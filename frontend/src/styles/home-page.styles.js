import styled, { keyframes } from 'styled-components'

const Home = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
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

Home.Header = styled.div`
  background: var(--dark);
  height: 60vh;
  position: relative;

  &::before {
    animation: ${balloonGrow(25, 35)} 5s linear forwards;
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
    animation: ${balloonGrow(15, 20)} 5s linear forwards;
    background: var(--red);
    border-radius: 50%;
    content: '';
    height: 10em;
    opacity: 0.1;
    position: absolute;
    right: 15rem;
    top: 5rem;
    width: 10rem;
  }

  h1 {
    font-weight: 100;
    left: 50%;
    position: absolute;
    top: 15%;
    transform: translateX(-50%);
  }

  > svg {
    bottom: 0;
    fill: var(--off-white);
    position: absolute;
    width: 100vw;
  }
`

Home.Body = styled.div`
  background: var(--off-white);
  height: 140vh;
  position: relative;
`

export default Home
