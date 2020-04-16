import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const P = styled.p`
  margin: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

P.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
