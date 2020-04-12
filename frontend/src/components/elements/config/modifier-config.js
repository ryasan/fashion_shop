import { css } from 'styled-components'

const MODIFIER_CONFIG = {
  clear: () =>
    css`
      background-color: transparent;
    `,
  dark: () => css`
    background-color: var(--dark);
  `,
  largeText: () => css`
    font-size: var(--large-font);
  `,
  mediumText: () => css`
    font-size: var(--regular-font);
  `,
  red: () => css`
    background-color: var(--red);
  `,
  redBorder: () => css`
    border-color: var(--red);
  `,
  redText: () => css`
    color: var(--red);
  `,
  smallText: () => css`
    font-size: var(--small-font);
  `,
  uppercase: () => css`
    text-transform: uppercase;
  `,
  whiteText: () => css`
    color: white;
  `
}

export default MODIFIER_CONFIG
