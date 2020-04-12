import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const B = styled.b`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

B.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
