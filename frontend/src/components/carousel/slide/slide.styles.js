import styled from 'styled-components'

import Icon from '../../icons/index'
import { device } from '../../../utils'

const Slide = styled.div`
  height: 50rem;
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    justify-content: center;
  }
`

Slide.Content = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

Slide.ElementWrap = styled.div`
  width: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30%;
  svg {
    fill: var(--red);
    width: 2.5rem;
    height: 100%;
  }
`

Slide.ElementInputInner = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    padding: 1rem 0 1rem 5rem;
    display: flex;
    font-size: var(--regular-font);
    border-radius: 3px;
    border: 2px solid var(--red);
    &:focus {
      outline-color: var(--red);
    }
  }
  svg {
    position: absolute;
    left: 1rem;
  }
`

Slide.ElementButtonInner = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background: transparent;
    border: 2px solid var(--red);
    padding: 1rem 4rem;
    font-size: var(--regular-font);
    color: var(--red);
    outline-color: var(--red);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    svg {
      position: relative;
    }
    &:hover {
      color: white;
      background: var(--red);
    }
  }
`

Slide.Icon = Icon
export default Slide
