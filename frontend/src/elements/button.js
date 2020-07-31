import styled, { css } from 'styled-components'

import { buildStyledComponent } from './config/build-styled-component'

export const Button = buildStyledComponent({
  element: styled.button,
  baseStyles: css`
    border: none;
    padding: 1rem;
    font-size: var(--font-size-m);
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  `
})

export const redButton = css`
  background: var(--red);
  color: white;
  border: 2px solid var(--red);
  outline-color: var(--red);
  font-size: var(--font-size-m);
  &:disabled {
    border-color: #fa8072;
    background: #fa8072;
  }
  &:hover:not(:disabled) {
    border-color: #f3443c;
    background: #f3443c;
  }
`

export const transparentButton = css`
  background: transparent;
  color: var(--red);
  border: 2px solid var(--red);
  font-size: var(--font-size-m);
  outline-color: var(--red);
  &:hover {
    color: var(--dark);
  }
`
