import styled, { css } from 'styled-components'

import { buildStyledComponent } from '../utils/build-styled-component'

const columnModifiers = {
  flex_row: () => css`
    flex-direction: row;
  `,
  flex_column: () => css`
    flex-direction: column;
  `
}

const columnBaseStyles = css`
  display: flex;
`

export const Column = buildStyledComponent({
  element: styled.div,
  blockModifiers: columnModifiers,
  baseStyles: columnBaseStyles,
  className: 'column'
})
