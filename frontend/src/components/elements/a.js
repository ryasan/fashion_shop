import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const A = styled.a`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

A.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
