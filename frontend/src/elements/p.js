import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../utils/build-styled-component'

export const P = buildStyledComponent({
  element: styled.p,
  baseStyles: css`
    margin: 0;
  `
})
