import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Small = styled.small`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Small.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
