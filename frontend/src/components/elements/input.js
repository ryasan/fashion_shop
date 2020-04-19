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

Input.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
