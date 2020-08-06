import styled, { css } from 'styled-components'
import { buildStyledComponent } from './config/build-styled-component'

export const Input = buildStyledComponent({
  element: styled.input,
  baseStyles: css`
    &:disabled {
      cursor: not-allowed;
    }
` // prettier-ignore
})

export const redInput = css`
  border: 0.1rem solid var(--red);
  font-size: var(--font-size-m);
  outline-color: var(--red);
  padding: 1rem 1rem 1rem 4.5rem;

  &:disabled {
    background: #ddd;
  }
`

export const whiteInput = css`
  border: 0;
  border-radius: 3px;
  font-size: var(--font-size-m);
  padding: 1rem 1rem 1rem 4.5rem;

  &:disabled {
    background: #ddd;
  }
`
