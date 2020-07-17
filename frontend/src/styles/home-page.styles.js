import styled, { keyframes, css } from 'styled-components'
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
  background: url(${require('../images/home-bg.svg')}) center center no-repeat;
  background-color: rgb(224, 228, 231);
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

Sidebar.Text = styled(motion.p)`
  position: absolute;
  bottom: 25%;
  left: 4rem;
  padding-right: 7%;
  font-size: var(--font-size-lg);
`

const fillRight = keyframes`
    0% { width: 0; } 
  100% { width: 100%; opacity: 1; }
`

const MotionListItem = styled(motion.li)`
  margin-bottom: 5rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  border: 0.3rem solid white;
  color: white;
  a {
    font-weight: bolder;
    display: block;
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    color: inherit;
    z-index: 1;
    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      height: 100%;
      width: 0;
      top: 0;
      left: 0;
      opacity: 0;
      background: white;
      ${props =>
        props.isHovered &&
        css`
          animation: ${fillRight} 0.2s linear forwards;
        `};
    }
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
  Sidebar,
  MotionBgImage,
  MotionListItem,
  MotionLogo,
  SocialMedia,
  MotionIcon,
  SpecialOffer
}
export default Home
