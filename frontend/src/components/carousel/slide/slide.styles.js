import styled from 'styled-components'

import { device } from '../../../utils'
import { redButton, redInput } from '../../../elements'

const Slide = styled.div`
  height: calc(100vh - 12.3rem);
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
  input {
    ${redInput};
    width: 100%;
  }
  svg {
    fill: var(--red);
    position: absolute;
    left: 1rem;
  }
`

Element.ButtonInner = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translateX(5rem);
  button {
    ${redButton};
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    svg {
      position: relative;
      fill: white;
    }
  }
`

Slide.Input = styled.input`
  padding: 1rem 0 1rem 4rem;
`

export { Element }
export default Slide
