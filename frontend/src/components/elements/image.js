import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Image = styled.img`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Image.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
