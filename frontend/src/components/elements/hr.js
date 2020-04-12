import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Hr = styled.hr`
  border: none;
  height: 1px;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Hr.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
