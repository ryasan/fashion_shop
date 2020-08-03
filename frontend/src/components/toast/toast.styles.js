import styled from 'styled-components'

const Toast = styled.div`
  .toast-container {
    width: auto;
  }

  .toast {
    background: var(--dark);
    color: white;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
    font-size: var(--font-size-m);
    overflow: initial;
    padding: 0 3rem;
    position: relative;

    &::after {
      border: 2rem solid transparent;
      border-bottom: 0;
      border-right: 0;
      border-top-color: var(--dark);
      bottom: -2rem;
      content: '';
      height: 0;
      position: absolute;
      right: 0;
      width: 0;
    }

    .close-button {
      fill: white;
      padding: 0.5rem;
      position: absolute;
      right: 0;
    }

    &.toast-success {
      background: red;
    }
  }
`

export default Toast
