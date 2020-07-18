import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'
import { device } from '../../utils'

const fillRight = keyframes`
    0% { width: 0; } 
  100% { width: 100%; opacity: 1; }
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

const MotionListItem = styled(motion.li)`
  margin-bottom: 5rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  border: 0.3rem solid white;
  color: white;
  background: var(--dark);
  a {
    font-weight: bolder;
    display: block;
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    color: inherit;
    position: relative;
    z-index: 10;
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

export { MotionListItem }
export default Sidebar
