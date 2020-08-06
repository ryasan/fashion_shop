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
      border: none;
    `,
    border_left_none: () => css`
      border-left: none;
    `,
    border_right_none: () => css`
      border-right: none;
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
    height_100: () => css`
      height: 100%;
    `,
    width_100: () => css`
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
