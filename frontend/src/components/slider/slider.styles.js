import styled, { css } from 'styled-components'

import { Button, Ul, Li, Span, Image, H1 } from '../../shared/elements'
import { device } from '../../shared/utils'

export const cardWidth = 40
const cardHeight = 50

const Slider = styled.div`
  align-items: center;
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.25),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.22);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 0;
  position: relative;
`

Slider.Title = styled(H1)`
  margin-bottom: 15rem;
  text-align: center;
`

Slider.HugeTextLeft = styled(H1)`
  color: var(--red);
  font-size: 25rem;
  font-weight: 300;
  left: -10rem;
  position: absolute;
  top: 0;

  @media ${device.mobileL} {
    display: none;
  }
`

Slider.HugeTextRight = styled(H1)`
  bottom: -27rem;
  font-size: 25rem;
  font-weight: 300;
  position: absolute;
  right: -19rem;
  z-index: 2;

  @media ${device.mobileL} {
    display: none;
  }
`

Slider.Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`

Slider.Track = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  position: relative;
  top: 0;
  width: var(--max-width);
`

Slider.Button = styled(Button)`
  align-items: center;
  background: var(--dark);
  border: 0.2rem solid white;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 3rem;
  height: 5rem;
  justify-content: center;
  left: 1rem;
  position: absolute;
  top: 25rem;
  width: 5rem;
  z-index: 1;

  &:last-child {
    left: initial;
    right: 1rem;
  }

  &:hover {
    background: var(--darker);
  }
`

Slider.List = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  max-width: var(--max-width);
  padding: 5rem 0;
  position: relative;
  transform: ${props => `translateX(${props.translateX}rem)`};
  transition: transform 0.5s;
  width: 100%;
`

Slider.ListItem = styled(Li)`
  height: ${cardHeight}rem;
  perspective: 600px;
  width: ${cardWidth}rem;

  @media ${device.mobileL} {
    height: ${cardHeight / 2}rem;
    width: ${cardWidth / 2}rem;
  }
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
    props.isLeftOuterCard &&
    css`
      transform: rotateY(30deg) scale(0.78);
    `}

  ${props =>
    props.isRightOuterCard &&
    css`
      transform: rotateY(-30deg) scale(0.78);
    `}

  ${props =>
    props.isLeftInnerCard &&
    css`
      transform: rotateY(30deg) scale(0.8);
    `}

  ${props =>
    props.isRightInnerCard &&
    css`
      transform: rotateY(-30deg) scale(0.8);
    `}

    ${props =>
      props.isCenter &&
      css`
        &:hover img {
          transform: scale(1.2);
        }
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
  overflow: hidden;
`

Card.HeaderImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease;
  width: 100%;
`

Card.Body = styled.div`
  align-items: center;
  background: var(--dark);
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: var(--font-size-xlg);
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`

Card.Text = styled(Span)`
  font-weight: 400;

  &:last-child {
    font-weight: 500;
  }
`

export default Slider
