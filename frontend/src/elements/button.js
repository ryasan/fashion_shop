import styled, { css } from 'styled-components'

import { buildStyledComponent } from './config/build-styled-component'

export const Button = buildStyledComponent({
  element: styled.button,
  baseStyles: css`
    border: 0;
    cursor: pointer;
    font-size: var(--font-size-m);
    padding: 1rem;

    &:disabled {
      cursor: not-allowed;
    }
  `
})

export const redButton = css`
  background: var(--red);
  border: 2px solid var(--red);
  color: white;
  font-size: var(--font-size-m);
  outline-color: var(--red);

  &:disabled {
    background: #fa8072;
    border-color: #fa8072;
  }

  &:hover:not(:disabled) {
    background: #f3443c;
    border-color: #f3443c;
  }
`

export const transparentButton = css`
  background: transparent;
  border: 2px solid var(--red);
  color: var(--red);
  font-size: var(--font-size-m);
  outline-color: var(--red);

  &:hover {
    color: var(--dark);
  }
`
