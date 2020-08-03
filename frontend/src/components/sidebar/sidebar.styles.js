import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'

const fillRight = keyframes`
0% { width: 0; }

100% { 
  opacity: 1;
  width: 100%;  
}
`

const Sidebar = styled(motion.div)`
  background: var(--red);
  height: 100%;
  padding: 12% 5%;
  position: relative;
  width: 40rem;
  z-index: 10;
`

Sidebar.List = styled.ul`
  a {
    color: white;
    text-decoration: none;
  }
`

Sidebar.Text = styled(motion.p)`
  bottom: 25%;
  font-size: var(--font-size-lg);
  left: 4rem;
  padding-right: 7%;
  position: absolute;
`

const MotionListItem = styled(motion.li)`
  background: var(--dark);
  border: 0.3rem solid white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  margin-bottom: 5rem;
  position: relative;

  a {
    color: inherit;
    display: block;
    font-size: 3rem;
    font-weight: bolder;
    padding: 1rem;
    position: relative;
    text-align: center;
    z-index: 10;

    &::after {
      background: black;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 0;
      z-index: -1;

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
