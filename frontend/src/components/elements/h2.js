import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const H2 = styled.h2`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

H2.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
