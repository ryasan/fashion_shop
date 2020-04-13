import styled from 'styled-components'

import { device } from '../../utils'

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
  width: 35rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;

  input {
    width: 100%;
    padding-left: 5rem;
    font-size: var(--regular-font);
    border-radius: 3px;
    border: 2px solid var(--red);
    &:focus {
      outline-color: var(--red);
    }
  }

  svg {
    fill: var(--red);
    height: 100%;
    width: 2.5rem;
    height: 100%;
    position: absolute;
    left: 1.5rem;
  }

  button {
    border: none;
    background: transparent;
    border: 2px solid var(--red);
    padding: 0 4rem;
    font-size: var(--regular-font);
    color: var(--red);
    outline-color: var(--red);
    cursor: pointer;
  }
`
export default Slide
