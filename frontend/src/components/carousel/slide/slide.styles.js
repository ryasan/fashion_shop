import styled from 'styled-components'

import Icon from '../../icons/index'
import { device } from '../../../utils'
import { Button } from '../../elements'

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

const Element = styled.div`
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

Element.InputInner = styled.div`
  display: flex;
  justify-content: center;
  svg {
    fill: var(--red);
    position: absolute;
    left: 1rem;
  }
`

Element.ButtonInner = styled.div`
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

Slide.Input = styled.input`
  padding: 1rem 0 1rem 4rem;
`

Slide.Button = Button
Slide.Icon = Icon

export { Element }
export default Slide
