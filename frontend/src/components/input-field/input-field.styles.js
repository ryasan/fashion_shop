import styled, { css } from 'styled-components'

import Icon from '../icons'
import { Input } from '../../shared/elements'

const fields = {
  container: {
    dark: css`
      border-color: white;
      border-width: 0.1rem;
    `,
    red: css`
      border-color: var(--red);
    `
  },
  icon: {
    dark: css`
      background: var(--dark);
    `,
    red: css`
      background: var(--red);
    `
  },
  input: {
    dark: css`
      border-color: var(--dark);
    `,
    red: css`
      border-color: white;
    `
  }
}

const Field = styled.div`
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 0.2rem;
  font-size: var(--font-size-m);
  position: relative;
  transition: all 0.2s;
  ${({ theme }) => fields.container[theme] || ''}
`

Field.Icon = styled(Icon)`
  height: 100%;
  padding: 0.5rem;
  position: absolute;
  width: 3.5rem;
  ${({ theme }) => fields.icon[theme] || ''}
`

Field.Input = styled(Input)`
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 0.2rem;
  height: 100%;
  padding: 1rem 1rem 1rem 4.5rem;
  width: 100%;
  ${({ theme }) => fields.input[theme] || ''};

  &:disabled {
    background: var(--off-white);
  }
`

export default Field
