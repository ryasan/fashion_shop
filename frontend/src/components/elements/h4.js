import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const H4 = styled.h4`
  margin: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

H4.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
