import { css } from 'styled-components'

import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

export const buildStyledComponent = ({
  element,
  baseStyles,
  blockModifiers,
  className
}) => {
  const { colors, typography, borders, layout, buttons } = config
  const MODIFIER_CONFIG = {
    ...buttons,
    ...colors,
    ...typography,
    ...borders,
    ...layout,
    ...blockModifiers
  }

  const styledElement = element.attrs(props => ({ className }))`
    ${baseStyles}
    ${applyStyleModifiers(MODIFIER_CONFIG)}
  `

  styledElement.propTypes = {
    modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
  }

  return styledElement
}

const config = {
  borders: {
    border_1: () => css`
      border-width: 0.1rem;
    `,
    border_2px: () => css`
      border-width: 0.2rem;
    `,
    border_3px: () => css`
      border-width: 0.3rem;
    `,
    border_none: () => css`
      border: 0;
    `,
    border_left_none: () => css`
      border-left: 0;
    `,
    border_right_none: () => css`
      border-right: 0;
    `,
    border_radius_2: () => css`
      border-radius: 2rem;
    `,
    border_radius_3: () => css`
      border-radius: 3rem;
    `,
    solid_border: () => css`
      border-style: solid;
    `
  },
  colors: {
    dark: () => css`
      background-color: var(--dark);
    `,
    dark_color: () => css`
      color: var(--dark);
    `,
    darker: () => css`
      background-color: var(--darker);
    `,
    gray_color: () => css`
      color: var(--gray);
    `,
    green: () => css`
      background: var(--green);
    `,
    green_color: () => css`
      color: var(--green);
    `,
    red: () => css`
      background-color: var(--red);
    `,
    red_border: () => css`
      border-color: var(--red);
    `,
    red_color: () => css`
      color: var(--red);
    `,
    red_outline: () => css`
      outline-color: var(--red);
    `,
    salmon: () => css`
      background: var(--salmon);
    `,
    salmon_border: () => css`
      border-color: var(--salmon);
    `,
    transparent: () => css`
      background-color: transparent;
    `,
    white: () => css`
      background-color: white;
    `,
    white_color: () => css`
      color: white;
    `
  },
  layout: {
    display_block: () => css`
      display: block;
    `,
    display_flex: () => css`
      display: flex;
    `,
    flex_1: () => css`
      flex: 1;
    `,
    height_100_pct: () => css`
      height: 100%;
    `,
    margin_2: () => css`
      margin: 2rem;
      color: red;
    `,
    width_5: () =>
      css`
        width: 5rem;
      `,
    width_10: () =>
      css`
        width: 10rem;
      `,
    width_15: () =>
      css`
        width: 15rem;
      `,
    width_20: () =>
      css`
        width: 20rem;
      `,
    width_25: () =>
      css`
        width: 25rem;
      `,
    width_30: () =>
      css`
        width: 30rem;
      `,
    width_35: () =>
      css`
        width: 35rem;
      `,
    width_40: () =>
      css`
        width: 40rem;
      `,
    width_45: () =>
      css`
        width: 45rem;
      `,
    width_50: () =>
      css`
        width: 50rem;
      `,
    width_55: () =>
      css`
        width: 55rem;
      `,
    width_60: () =>
      css`
        width: 60rem;
      `,
    width_65: () =>
      css`
        width: 65rem;
      `,
    width_70: () =>
      css`
        width: 70rem;
      `,
    width_75: () =>
      css`
        width: 75rem;
      `,
    width_80: () =>
      css`
        width: 80rem;
      `,
    width_85: () =>
      css`
        width: 85rem;
      `,
    width_90: () =>
      css`
        width: 90rem;
      `,
    width_95: () =>
      css`
        width: 95rem;
      `,
    width_100: () =>
      css`
        width: 100rem;
      `,
    width_100_pct: () => css`
      width: 100%;
    `
  },
  typography: {
    bold: () => css`
      font-weight: bold;
    `,
    font_size_lg: () => css`
      font-size: var(--font-size-lg);
    `,
    font_size_m: () => css`
      font-size: var(--font-size-m);
    `,
    font_size_s: () => css`
      font-size: var(--font-size-s);
    `,
    font_size_xs: () => css`
      font-size: var(--font-size-xs);
    `,
    text_align_center: () => css`
      text-align: center;
    `,
    text_align_left: () => css`
      text-align: left;
    `,
    text_align_right: () => css`
      text-align: right;
    `,
    uppercase: () => css`
      text-transform: uppercase;
    `
  }
}
