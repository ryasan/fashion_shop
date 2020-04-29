import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../../utils/build-styled-component'

export const H2 = buildStyledComponent({
  element: styled.h2,
  baseStyles: css`
    margin: 0;
  `
})
