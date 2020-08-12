import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import redTexture from '../../../static/red-texture.png'
import { H2 } from '../../../shared/elements'
import { device } from '../../../shared/utils'

const FeaturedProducts = styled.div`
  align-content: center;
  align-items: center;
  background: var(--red);
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  min-height: 90vh;
  position: relative;
  width: 100%;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`

FeaturedProducts.Promo = styled.div`
  background: white;
  border-radius: 2rem;
  bottom: -1rem;
  box-shadow: 0 0 2.8rem rgba(0, 0, 0, 0.25),
    0 0 1rem rgba(0, 0, 0, 0.22);
  color: var(--dark);
  font-size: 2rem;
  padding: 2rem 3rem;
  position: absolute;
  right: 10rem;
  transform: rotate(15deg);
  z-index: 1;
`

export const Card = styled(motion.div)`
  background: var(--off-white);
  box-shadow: var(--box-shadow-s);
  display: flex;
  flex-direction: column;
  max-width: calc(var(--max-width) / 2);
  min-height: 69vh;
  position: relative;
  top: -10rem;
  width: 100%;
  z-index: 1;

  &:first-child {
    grid-column: 1/2;
  }

  &:last-child {
    grid-column: 2/3;
  }

  @media ${device.mobileL} {
    margin-top: 7rem;
    width: 90%;
  }
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

Card.CategoryTitle = styled.h3`
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
  }
`

Card.CallToAction = styled(motion.div)`
  align-items: flex-end;
  color: var(--red);
  display: flex;
  font-size: 2rem;
  justify-content: center;
  padding: 2rem 0;
`

Card.ImageContainer = styled(motion.div)`
  bottom: 0;
  display: flex;
  flex: 9;
  justify-content: center;
  min-height: calc(100% - 14rem);
  overflow: hidden;
  position: relative;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

Card.Image = styled(motion.img)`
  object-fit: cover;
  width: 50%;
`

Card.ProductTitle = styled(H2)`
  background: var(--dark);
  bottom: -5rem;
  box-shadow: var(--box-shadow-s);
  display: inline;
  left: 50%;
  margin: 0;
  padding: 2rem 4rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) skew(-5deg) rotate(-1deg);
  white-space: nowrap;
`

export default FeaturedProducts
