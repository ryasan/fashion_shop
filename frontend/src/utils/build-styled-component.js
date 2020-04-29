import { css } from 'styled-components'

import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

export const buildStyledComponent = ({
  element,
  baseStyles,
  blockModifiers
}) => {
  const { colors, typography, borders, layout } = config
  const MODIFIER_CONFIG = {
    ...colors,
    ...typography,
    ...borders,
    ...layout,
    ...blockModifiers
  }

  const styledElement = element`
    ${baseStyles}
    ${applyStyleModifiers(MODIFIER_CONFIG)}
  `

  styledElement.propTypes = {
    modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
  }

  return styledElement
}

const config = {
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
    off_white_color: () => css`
      color: var(--off-white);
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
    white_color: () => css`
      color: white;
    `
  },
  typography: {
    bold: () => css`
      font-weight: bold;
    `,
    large_text: () => css`
      font-size: var(--large-font);
    `,
    medium_text: () => css`
      font-size: var(--regular-font);
    `,
    small_text: () => css`
      font-size: var(--small-font);
    `,
    super_small_text: () => css`
      font-size: var(--super-small-font);
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
  },
  borders: {
    border_2px: () => css`
      border-width: 2px;
    `,
    border_3px: () => css`
      border-width: 3px;
    `,
    border_none: () => css`
      border: none;
    `,
    border_radius_2px: () => css`
      border-radius: 2px;
    `,
    border_radius_3px: () => css`
      border-radius: 3px;
    `,
    solid_border: () => css`
      border-style: solid;
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
  }
}
