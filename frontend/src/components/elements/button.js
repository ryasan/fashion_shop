import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../../utils/build-styled-component'

export const Button = buildStyledComponent({
  element: styled.button,
  baseStyles: css`
    border: none;
    cursor: pointer;
  `
})

export const redModifiers = [
  'red',
  'white_color',
  'red_border',
  'border_2px',
  'solid_border',
  'medium_text',
  'red_outline'
]

export const disabledRedButton = [
  'white_color',
  'salmon_border',
  'border_2px',
  'solid_border',
  'medium_text',
  'red_outline'
]

export const transparentButton = [
  'transparent',
  'red_color',
  'red_border',
  'border_2px',
  'solid_border',
  'medium_text',
  'red_outline'
]
