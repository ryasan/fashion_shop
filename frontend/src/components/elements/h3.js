import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const H3 = styled.h3`
  margin: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

H3.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
