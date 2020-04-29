import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../utils/build-styled-component'

export const H3 = buildStyledComponent({
  element: styled.h3,
  baseStyles: css`
    margin: 0;
  `
})
