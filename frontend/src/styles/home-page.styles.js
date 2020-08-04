import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const Home = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`

Home.Header = styled.div`
  background: var(--dark);
  height: 50vh;
  position: relative;

  h1 {
    font-weight: 100;
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
  height: 150vh;
  position: relative;
`

Home.FeaturedProducts = styled.div`
  background: var(--off-white);
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  display: flex;
  height: 40rem;
  justify-content: space-around;
  left: 50%;
  max-width: var(--max-width);
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

Card.Header = styled.div`
  background: var(--dark);

  h3 {
    font-weight: 100;
    letter-spacing: 1rem;
    margin: 0;
    padding: 2rem 0;
    text-align: center;
  }
`

const topLeftPosition = css`
  left: 0;
  top: 10rem;
`

const bottomRightPosition = css`
  right: 0;
  top: 20rem;
`

Card.ImageContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;

  svg {
    ${props => (props.bottomRight ? bottomRightPosition : topLeftPosition)}
    color: var(--dark);
    position: absolute;
    width: 14rem;
    z-index: 1;
  }
`

Card.Image = styled(motion.div)`
  background: url('${props => props.image}') center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const SocialMedia = styled(motion.div)`
  bottom: 5rem;
  position: absolute;
  right: 5rem;
`

const MotionIcon = styled(motion.div)`
  color: var(--dark);
  display: inline-block;

  svg {
    cursor: pointer;
    height: 5rem;
    margin-left: 2rem;
    width: 5rem;
  }
`

export { SocialMedia, MotionIcon, Card }
export default Home
