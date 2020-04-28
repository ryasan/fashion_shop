import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Option = styled.option`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Option.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
