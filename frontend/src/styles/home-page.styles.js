import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device } from '../utils'

const Home = styled.div`
  height: 100vh;
  background: #dee2e5;
  overflow: hidden;
`

const MotionBgImage = styled(motion.div)`
  height: 100%;
  width: 100%;
  /* background: url(${require('../images/home-bg.svg')}) center center no-repeat;
  background-color: rgb(224, 228, 231); */
  position: absolute;
  overflow: hidden;
  @media ${device.mobileL} {
    background-image: url(${require('../images/logo-jersey-banner.svg')});
    background-position-y: top;
    background-size: 200%;
  }
`

MotionBgImage.Img = styled(motion.img)`
  width: 100%;
  @media ${device.mobileL} {
    opacity: 0;
  }
`

const Foreground = styled(motion.div)`
  height: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background: #16141a;
  }
  @media ${device.mobileL} {
    opacity: 0;
  }
`

/* background: url(${require('../images/foreground-img-1.2.svg')}) center
    center/cover no-repeat; */
Foreground.One = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #16141a;  
  &:before {
    content: '';
    background: url(${require('../images/cool-guy-1.svg')}) center center no-repeat;
    top: 0;
    right: -5rem;
    position: absolute;
    width: 30rem;
    height: 30rem;
    display: block;
    border-radius: 50%;
  }
  &:after {
    content: '';
    position: absolute;
    top: 10rem;
    right: 20rem;
    width: 30rem;
    height: 30rem;
    background: var(--red);
    border-radius: 50%;
    opacity: 0.5;
  }
`

Foreground.Two = styled.div`
  height: 100%;
  background: #16141a;
`

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(255, 0, 0, 0.5);
  @media ${device.mobileL} {
    opacity: 0;
  }
`

const MotionLogo = styled(motion.div)`
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptop} {
    left: 50rem;
  }
`

const SocialMedia = styled(motion.div)`
  position: absolute;
  bottom: 5rem;
  right: 30rem;
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
  position: absolute;
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
`

export {
  Foreground,
  Overlay,
  MotionBgImage,
  MotionLogo,
  SocialMedia,
  MotionIcon,
  SpecialOffer
}
export default Home
