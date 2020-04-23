import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Input = styled.input`
  &[type='submit'] {
    cursor: pointer;
  }
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

export const InputWithAddon = styled.input`
  padding: 1rem 0 1rem 4rem;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Input.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}

export const redInput = [
  'width100',
  'mediumText',
  'borderRadius2px',
  'border2px',
  'solidBorder',
  'redBorder',
  'redOutline'
]
