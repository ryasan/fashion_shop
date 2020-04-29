import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../../utils/build-styled-component'

export const H4 = buildStyledComponent({
  element: styled.h4,
  baseStyles: css`
    margin: 0;
  `
})
