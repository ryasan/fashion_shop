import styled, { css } from 'styled-components'
import Slider from 'react-slick'

import Icon from '../icons'

const Carousel = styled.div`
  overflow-x: hidden;
  flex: 1;
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
  padding: 0.7rem;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  transition: all 0.3s;
  cursor: pointer;
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    color: var(--dark);
  }
`

const PrevButton = styled.div`
  ${arrowStyles};
  left: ${props => (props.isHovering ? '3.5rem' : '-3.5rem')};
  svg {
    right: 0.2rem;
  }
`

const NextButton = styled.div`
  ${arrowStyles};
  right: ${props => (props.isHovering ? '3.5rem' : '-3.5rem')};
  svg {
    left: 0.2rem;
  }
`

Carousel.Icon = Icon

export { PrevButton, NextButton }
export default Carousel
