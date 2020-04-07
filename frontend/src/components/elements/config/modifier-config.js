import { css } from 'styled-components'

const MODIFIER_CONFIG = {
  clear: () => css`
    background-color: transparent;
  `,
  dark: () => css`
    background-color: var(--dark);
  `,
  largeText: () => css`
    font-size: 2.5rem;
  `,
  mediumText: () => css`
    font-size: 1.5rem;
  `,
  red: () => css`
    background-color: var(--red);
  `,
  redBorder: () => css`
    border: 2px solid red;
  `,
  redText: () => css`
    color: var(--red);
  `,
  smallText: () => css`
    font-size: 0.8rem;
  `,
  whiteText: () => css`
    color: white;
  `
}

export default MODIFIER_CONFIG
