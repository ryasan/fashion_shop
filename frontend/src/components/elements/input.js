import styled, { css } from 'styled-components'
import { buildStyledComponent } from '../../utils/build-styled-component'

export const Input = buildStyledComponent({
  element: styled.input,
  baseStyles: css`
    &:disabled {
      cursor: not-allowed;
    }
  `
})

export const redInput = css`
  font-size: var(--font-size-m);
  border: 1px solid var(--red);
  border-radius: 2px;
  outline-color: var(--red);
  padding: 1rem 1rem 1rem 4.5rem;
  &:disabled {
    background: #ddd;
  }
`
