import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import { device } from '../utils'

const Home = styled.div`
  background: var(--dark);
  display: flex;
  height: 100vh;
  overflow: hidden;
`

const grow = keyframes`
0% {
  height: 60rem;
  width: 60rem;
}

100% {
  height: 80rem;
  width: 80rem;
}
`

const grow2 = keyframes`
0% {
  height: 40rem;
  width: 40rem;
}

100% {
  height: 50rem;
  width: 50rem;
}
`

const Foreground = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  position: relative;

  &::before {
    animation: ${grow} 7s linear forwards;
    background: var(--red);
    border-radius: 50%;
    content: '';
    height: 50rem;
    opacity: 0.1;
    position: absolute;
    transform: translate(25rem, -10rem);
    width: 50rem;
  }

  &::after {
    animation: ${grow2} 7s linear forwards;
    background: white;
    border-radius: 50%;
    content: '';
    height: 30rem;
    opacity: 0.03;
    position: absolute;
    transform: translate(-40rem, 25rem);
    width: 30rem;
  }
`

const MotionLogo = styled(motion.div)`
  height: 70rem;
  position: relative;
  width: 70rem;
  z-index: 100;

  svg {
    height: 100%;
    width: 100%;
  }
`

const SocialMedia = styled(motion.div)`
  bottom: 5rem;
  position: absolute;
  right: 5rem;
`

const MotionIcon = styled(motion.div)`
  color: var(--red);
  display: inline-block;

  svg {
    cursor: pointer;
    height: 5rem;
    margin-left: 2rem;
    width: 5rem;
  }
`

const SpecialOffer = styled(motion.div)`
  background: var(--red);
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  font-size: var(--font-size-s);
  left: 50%;
  padding: 0.5rem 1rem;
  position: fixed;
  text-align: center;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;

  @media ${device.tablet} {
    position: relative;
  }
`

export { Foreground, MotionLogo, SocialMedia, MotionIcon, SpecialOffer }
export default Home
