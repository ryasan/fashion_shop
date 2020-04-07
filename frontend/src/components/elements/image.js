import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Img = styled.img`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Img.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
