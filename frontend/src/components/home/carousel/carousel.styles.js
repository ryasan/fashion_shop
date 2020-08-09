import styled, { css } from 'styled-components'

import { Button, Ul, Li, Span, Image } from '../../../shared/elements'

export const cardWidth = 40

const Carousel = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 5rem 0;
  position: relative;
  outline: 1px solid blue;

  * {
    outline: 1px solid red;
  }
`

Carousel.SliderContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

Carousel.Track = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  position: relative;
  top: 0;
  width: var(--max-width);
`

Carousel.Button = styled(Button)`
  background: var(--dark);
  border: 0.2rem solid white;
  border-radius: 50%;
  height: 5rem;
  left: 1rem;
  position: absolute;
  top: 25rem;
  width: 5rem;
  z-index: 1;

  &:last-child {
    left: initial;
    right: 1rem;
  }
`

Carousel.SliderList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  max-width: var(--max-width);
  padding: 5rem 0;
  position: relative;
  transform: ${props => `translateX(calc(${props.translateX}rem))`};
  transition: transform 0.5s;
  width: 100%;
`

export const Scene = styled(Li)`
  height: 50rem;
  perspective: 600px;
  width: ${cardWidth}rem;
`

export const Card = styled.div`
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.4);
  height: 100%;
  position: relative;
  transform: ${props => (props.isCenter ? 'scale(1.2)' : 'scale(0.8)')};
  transform-style: preserve-3d;
  transition: transform 1s;
  width: 100%;

  ${props =>
    props.isOnDeckOnTheLeft &&
    css`
      transform: rotateY(30deg) scale(0.78);
    `}

  ${props =>
    props.isOnDeckOnTheRight &&
    css`
      transform: rotateY(-30deg) scale(0.78);
    `}

  ${props =>
    props.isPresentedOnLeft &&
    css`
      transform: rotateY(30deg) scale(0.8);
    `}

  ${props =>
    props.isPresentedOnRight &&
    css`
      transform: rotateY(-30deg) scale(0.8);
    `}
`

Card.Face = styled.div`
  align-items: center;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`

Card.Header = styled.div`
  flex: 9;
`

Card.HeaderImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`

Card.Body = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: var(--font-size-xlg);
  justify-content: center;
  padding: 1rem 0;
`

Card.Text = styled(Span)`
  font-weight: 400;

  &:last-child {
    font-weight: 500;
  }
`

export default Carousel
