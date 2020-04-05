import styled, { css } from 'styled-components'
import Slider from 'react-slick'

import Icon from '../icons'

const Carousel = styled.div`
  overflow-x: hidden;
`

Carousel.Slider = Slider

const arrowStyles = css`
  position: absolute;
  z-index: 1;
  height: 3.5rem;
  width: 3.5rem;
  top: 50%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translateY(-50%);
  fill: var(--darker);
  padding: 0.7rem;
  opacity: ${props => (props.showArrows ? 1 : 0)};
  transition: all 0.3s;
  cursor: pointer;
  svg {
    position: relative;
  }
`

Carousel.Prev = styled.div`
  ${arrowStyles};
  left: ${props => (props.showArrows ? '3.5rem' : '-3.5rem')};
  svg {
    right: 2px;
  }
`

Carousel.Next = styled.div`
  ${arrowStyles};
  right: ${props => (props.showArrows ? '3.5rem' : '-3.5rem')};
  svg {
    left: 2px;
  }
`

Carousel.Icon = Icon

export default Carousel
