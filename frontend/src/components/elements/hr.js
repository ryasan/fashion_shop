import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../../utils/build-styled-component'

export const Hr = buildStyledComponent({
  element: styled.hr,
  baseStyles: css`
    border: none;
    height: 1px;
  `
})
