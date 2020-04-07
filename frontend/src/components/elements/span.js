import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Span = styled.span`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Span.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
