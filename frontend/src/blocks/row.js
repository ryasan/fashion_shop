import styled, { css } from 'styled-components'

import { buildStyledComponent } from '../utils/build-styled-component'

const rowModifiers = {
  flex_row: () => css`
    flex-direction: row;
  `,
  flex_column: () => css`
    flex-direction: column;
  `,

  tall: () => css`
    padding: 5rem 0;
  `
}

const rowBaseStyles = css`
  display: flex;
`

export const Row = buildStyledComponent({
  element: styled.div,
  blockModifiers: rowModifiers,
  baseStyles: rowBaseStyles,
  className: 'row'
})