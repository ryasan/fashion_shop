import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
