import styled from 'styled-components'

import Icon from '../../icons/index'
import { device } from '../../../utils'
import { Button, InputWithAddon } from '../../elements'

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
    width: 2.5rem;
    height: 100%;
  }
`

Slide.ElementInputInner = styled.div`
  display: flex;
  justify-content: center;
  svg {
    fill: var(--red);
    position: absolute;
    left: 1rem;
  }
`

Slide.ElementButtonInner = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 1rem 4rem;
    position: relative;
    display: flex;
    align-items: center;
    svg {
      position: relative;
    }
  }
`

Slide.Button = Button
Slide.Input = InputWithAddon
Slide.Icon = Icon
export default Slide
