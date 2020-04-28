import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Label = styled.label`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Label.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
