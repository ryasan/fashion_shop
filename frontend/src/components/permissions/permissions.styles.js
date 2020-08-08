import styled from 'styled-components'

import { btns } from '../../shared/styles'

const Permissions = styled.div`
  margin-top: 3rem;
  width: 100%;

  button {
    ${btns.red}
    width: 100%;

    &:hover {
      ${btns.salmon}
    }
  }

  tbody {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  th,
  td {
    &:last-child {
      border-left: 0.1rem solid white;
    }

    &:nth-child(n + 3):not(:last-child) {
      border-left: 0;
      border-right: 0;
      width: 12rem;

      > [type='checkbox'] {
        transform: translate(-1rem, -0.9rem);
      }
    }
  }

  td {
    border-top: 0.1rem solid white !important;
  }
`

export default Permissions
