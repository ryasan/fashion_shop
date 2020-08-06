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
` // prettier-ignore
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

export const whiteButton = css`
  background: white;
  border: 0.2rem solid white;
  border-radius: 0.3rem;
  color: var(--dark);
  font-size: var(--font-size-m);
  transition: background 0.2s;

  &:disabled {
    background: #ddd;
    border-color: #ddd;
  }

  &:hover:not(:disabled) {
    background: var(--dark);
    color: white;
  }
`

export const transparentButton = css`
  background: transparent;
  border: 0.2rem solid white;
  color: white;
  font-size: var(--font-size-m);

  &:hover {
    background: var(--red);
    border-color: var(--red);
  }
`
