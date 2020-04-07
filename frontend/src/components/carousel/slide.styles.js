import styled from 'styled-components'

import { device } from '../../utils'

const Slide = styled.div`
  background: url(${props => props.bg}) center center/cover no-repeat;
  height: 50rem;
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    justify-content: center;
  }
`

Slide.Content = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30%;
  @media ${device.mobileL} {
    margin-left: 0;
  }
`

Slide.Title = styled.h1`
  color: white;
  margin: 0;
  margin-bottom: 5rem;
`

Slide.ElementWrap = styled.div`
  width: 45rem;
  height: 4.5rem;
  display: flex;
  position: relative;

  input {
    width: 100%;
    padding-left: 5rem;
    font-size: var(--regular-font);
    border-radius: 3px;
    border: none;
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
    color: white;
    outline-color: var(--red);
    cursor: pointer;
  }
`

export default Slide
