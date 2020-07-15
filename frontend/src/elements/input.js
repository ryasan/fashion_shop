import styled, { css } from 'styled-components'
import { buildStyledComponent } from './config/build-styled-component'

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
  border: 0.1rem solid var(--red);
  outline-color: var(--red);
  padding: 1rem 1rem 1rem 4.5rem;
  &:disabled {
    background: #ddd;
  }
`
