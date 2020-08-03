import styled from 'styled-components'

const Permissions = styled.div`
  margin-top: 3rem;
  width: 100%;

  button {
    align-items: center;
    background: var(--salmon);
    display: flex;
    height: 3rem;
    justify-content: center;
    width: 70%;

    &:hover {
      background: var(--red);
      color: white;
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

      & > [type='checkbox'] {
        transform: translate(-1rem, -0.9rem);
      }
    }
  }

  td {
    border-top: 0.1rem solid white !important;
  }
`

export default Permissions
