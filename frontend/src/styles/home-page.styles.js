import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import { device } from '../utils'

const Home = styled.div`
  height: 100vh;
  background: var(--dark);
  overflow: hidden;
  display: flex;
`

const grow = keyframes`
  0% { width: 60rem; height: 60rem; }
100% { width: 80rem; height: 80rem; }
`

const grow2 = keyframes`
  0% { width: 40rem; height: 40rem; }
100% { width: 50rem; height: 50rem; }
`

const Foreground = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    width: 50rem;
    height: 50rem;
    background: var(--red);
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    transform: translate(25rem, -10rem);
    animation: ${grow} 7s linear forwards;
  }
  &:after {
    content: '';
    width: 30rem;
    height: 30rem;
    background: white;
    position: absolute;
    opacity: 0.03;
    border-radius: 50%;
    transform: translate(-40rem, 25rem);
    animation: ${grow2} 7s linear forwards;
  }
`

const MotionLogo = styled(motion.div)`
  position: relative;
  z-index: 100;
  width: 70rem;
  height: 70rem;
  svg {
    width: 100%;
    height: 100%;
  }
`

const SocialMedia = styled(motion.div)`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

const MotionIcon = styled(motion.div)`
  color: var(--red);
  display: inline-block;
  svg {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    margin-left: 2rem;
  }
`

const SpecialOffer = styled(motion.div)`
  background: var(--red);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-s);
  border-radius: 0.3rem;
  width: 100%;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
  @media ${device.tablet} {
    position: relative;
  }
`

export { Foreground, MotionLogo, SocialMedia, MotionIcon, SpecialOffer }
export default Home
