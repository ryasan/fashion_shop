import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Ul = styled.ul`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Ul.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
