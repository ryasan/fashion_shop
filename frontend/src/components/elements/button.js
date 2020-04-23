import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Button = styled.button`
  cursor: pointer;
  border: none;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}

export const redButton = [
  'red',
  'whiteColor',
  'redBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]

export const disabledRedButton = [
  'lightRed',
  'whiteColor',
  'salmonBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]

export const clearButton = [
  'transparent',
  'redColor',
  'redBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]
