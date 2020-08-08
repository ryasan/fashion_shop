import { css } from 'styled-components'

const btnBase = css`
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 0.2rem;
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: 1rem;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
  }
`

export const btns = {
  clearRed: css`
    ${btnBase};
    background: transparent;
    border-color: var(--red);
    color: var(--red);
  `,
  clearSalmon: css`
    ${btnBase};
    background: transparent;
    border-color: var(--salmon);
    color: var(--salmon);
  `,

  clearWhite: css`
    ${btnBase};
    background: transparent;
    border-color: white;
    color: white;
  `,
  lightRed: css`
    ${btnBase};
    background: #ef5350;
    border-color: #ef5350;
    color: white;
  `,
  red: css`
    ${btnBase};
    background: var(--red);
    border-color: var(--red);
    color: white;
  `,
  salmon: css`
    ${btnBase};
    background: #fa8072;
    border-color: #fa8072;
    color: white;
  `,
  white: css`
    ${btnBase};
    background: white;
    border-color: white;
    color: var(--dark);
  `
}
