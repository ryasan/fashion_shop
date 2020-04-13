import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from 'styled-components-modifiers'

import MODIFIER_CONFIG from './config/modifier-config'

export const Li = styled.li`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

Li.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}
