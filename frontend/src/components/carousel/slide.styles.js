import styled, { css } from 'styled-components'

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
  background-image: url(${require('../../images/circle-bg.svg')});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

Slide.Title = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${require('../../images/circle-bg.svg')});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  filter: invert(100%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  font-weight: 600;
  color: transparent;
  text-align: center;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

Slide.ElementWrap = styled.div`
  width: 45rem;
  height: 4.5rem;
  display: flex;
  position: absolute;
  left: 60%;
  bottom: 20%;

  input {
    width: 100%;
    padding-left: 5rem;
    font-size: var(--regular-font);
    border-radius: 3px;
    border: 2px solid var(--red);
    background: var(--off-white);
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

const bgs = {
  circle: css`
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 75%;
      background: white;
      border-radius: 50rem;
      transform: scale(1.5);
    }
  `,
  squares: css`
    &:before {
      content: '';
      position: absolute;
      width: 50rem;
      height: 50rem;
      background: white;
      bottom: -50%;
      left: -20%;
      transform: rotate(30deg);
    }
    &:after {
      content: '';
      position: absolute;
      width: 50rem;
      height: 50rem;
      background: white;
      top: -50%;
      right: -20%;
      transform: rotate(60deg);
      border: 2px solid var(--red);
    }
  `,
  half: css`
    .slide-text {
      width: 200px;
      height: 20px;
      &:before,
      &:after {
        padding: 10px 0;
        text-indent: 10px;
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
        content: attr(data-content);
      }
      &:before {
        background: white;
        color: black;
        width: 100%;
      }
      &:after {
        background: black;
        color: white;
        width: 20%;
      }
    }
  `
}

export default Slide
