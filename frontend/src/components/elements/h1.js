import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const H1 = styled.h1`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

H1.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
