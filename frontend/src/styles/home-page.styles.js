import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device } from '../utils'

const Home = styled.div`
  height: 100vh;
`

const MotionBgImage = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: url(${require('../images/home-bg.svg')}) center center no-repeat;
  background-size: cover;
  position: absolute;
  filter: grayscale(1);
  @media ${device.mobileL} {
    background-image: url(${require('../images/logo-jersey-banner.svg')});
    background-position-y: top;
    background-size: 200%;
    filter: initial;
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

Foreground.One = styled.div`
  height: 100%;
  width: 100%;
  background: url(${require('../images/foreground-img-1.svg')}) center
    center/cover no-repeat;
`

Foreground.Two = styled.div`
  height: 100%;
  background: url(${require('../images/foreground-img-2.svg')}) center
    center/cover no-repeat;
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

const Sidebar = styled(motion.div)`
  width: 40rem;
  height: 100%;
  background: var(--red);
  position: absolute;
  z-index: 10;
  padding: 12% 5%;
  overflow: hidden;
  @media ${device.mobileL} {
    bottom: 0;
    width: 100%;
    height: 50%;
  }
`

Sidebar.List = styled.ul`
  a {
    text-decoration: none;
    color: white;
  }
`

Sidebar.Text = styled.p`
  position: absolute;
  bottom: 25%;
  left: 4rem;
  padding-right: 7%;
  font-size: var(--font-size-lg);
`

const MotionListItem = styled(motion.li)`
  margin-bottom: 5rem;
  font-size: 3rem;
  border-bottom: 0.2rem solid white;
  position: relative;
  padding-left: 1rem;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: white;
    -webkit-backface-visibility: hidden;
  }
  &:before {
    transform: rotate(-25deg);
    bottom: -2rem;
    right: -0.5rem;
    height: 2rem;
    width: 0.2rem;
  }
  &:after {
    bottom: -2rem;
    right: -0.9rem;
    height: 0.2rem;
    width: 2rem;
  }
`

const MotionLogo = styled(motion.div)`
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
  }
`

export {
  Foreground,
  Overlay,
  Sidebar,
  MotionBgImage,
  MotionListItem,
  MotionLogo
}
export default Home
