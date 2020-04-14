import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Button = styled.button`
  padding: 1.5rem 2rem;
  cursor: pointer;
  border: none;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
