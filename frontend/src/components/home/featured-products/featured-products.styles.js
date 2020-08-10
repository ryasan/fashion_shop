import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Svg from '../../svgs'
import redTexture from '../../../static/red-texture.png'

const FeaturedProducts = styled.div`
  align-items: center;
  background: var(--red);
  display: flex;
  height: 70vh;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
  width: 100%;
`

export const InnerContainer = styled.div`
  background: var(--off-white);
  border-radius: 3px;
  box-shadow: var(--box-shadow-s);
  display: flex;
  height: 100%;
  justify-content: space-around;
  max-width: var(--max-width);
  position: absolute;
  top: -9rem;
  width: 100%;
  z-index: 10;
`

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const SkullSvg = styled(Svg)`
  color: var(--dark);
  height: 100%;
  position: absolute;
  top: -15rem;
  width: 20rem;
`

export const NinjaSvg = styled(Svg)`
  bottom: -20rem;
  color: var(--dark);
  height: 100%;
  position: absolute;
  right: 0;
  width: 20rem;
`

Card.Header = styled.div`
  background: var(--dark);
  height: 9rem;
  line-height: 9rem;
  position: relative;

  ${props =>
    props.isOdd &&
    css`
      border-left: 0;
    `}
`

Card.Title = styled.h3`
  background: url(${redTexture});
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 1rem;
  margin: 0;
  text-align: center;

  &::before {
    align-items: center;
    background: var(--dark);
    content: '${props => props.title}';
    display: flex;
    height: calc(100% - 1rem);
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(calc(-50%), -50%);
    width: calc(100% - 1rem);
    z-index: 0;

    ${props =>
      props.isEvenElement &&
      css`
        transform: translate(calc(-50% + 0.5rem), -50%);
        width: calc(100% - 0.1rem);
      `}
  }
`

Card.CallToAction = styled(motion.button)`
  align-items: center;
  color: var(--red);
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  height: 7rem;
  justify-content: flex-end;
  line-height: 7rem;
`

Card.ImageContainer = styled(motion.div)`
  align-self: center;
  bottom: 0;
  display: flex;
  flex: 9;
  height: calc(100% - 14rem);
  justify-content: center;
  position: absolute;
`

Card.Image = styled(motion.img)`
  object-fit: cover;
  width: 50%;
`

export default FeaturedProducts
