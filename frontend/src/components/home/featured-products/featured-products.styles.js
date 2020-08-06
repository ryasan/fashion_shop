import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { NinjaText, SkullText } from '../../../images'

const FeaturedProducts = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
  width: 100%;
`

const InnerContainer = styled.div`
  background: var(--off-white);
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  display: flex;
  height: 100%;
  justify-content: space-around;
  left: 50%;
  max-width: var(--max-width);
  position: absolute;
  top: -19rem;
  transform: translateX(-50%);
  width: 100%;
`

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
`

const TextSvgStyles = styled.div`
  color: var(--dark);
  height: 100%;
  position: absolute;
  width: 100%;

  &:first-child {
    background: blue;
  }

  svg {
    position: absolute;

    ${props =>
      props.leftSide &&
      css`
        bottom: 47rem;
        left: 0;
      `};

    ${props =>
      props.rightSide &&
      css`
        bottom: 15rem !important;
        right: 0;
      `};
  }
`

const SkullSvg = leftSide => {
  return (
    <TextSvgStyles leftSide>
      <SkullText />
    </TextSvgStyles>
  )
}

const NinjaSvg = () => {
  return (
    <TextSvgStyles rightSide>
      <NinjaText />
    </TextSvgStyles>
  )
}

Card.Header = styled.div`
  background: var(--dark);
  height: 7rem;
  line-height: 7rem;
`

Card.Title = styled.h3`
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 1rem;
  margin: 0;
  text-align: center;
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

export { Card, InnerContainer, SkullSvg, NinjaSvg }
export default FeaturedProducts
