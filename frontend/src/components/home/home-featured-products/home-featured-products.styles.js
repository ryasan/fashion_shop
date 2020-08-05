import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const FeaturedProducts = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`

FeaturedProducts.Inner = styled.div`
  background: var(--off-white);
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  display: flex;
  height: 50rem;
  justify-content: space-around;
  left: 50%;
  max-width: var(--max-width);
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Card = styled.div`
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

Card.CallToAction = styled(motion.button)`
  align-items: center;
  color: var(--red);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
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
  flex: 9;
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

export { Card }
export default FeaturedProducts
