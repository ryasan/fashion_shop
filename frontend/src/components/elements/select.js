import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Select = styled.select`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Select.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
