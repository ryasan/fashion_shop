import styled, { css } from 'styled-components'

const ToastStyles = css`
  .toast-container {
    width: auto;
  }
  .toast {
    background: var(--dark);
    font-size: var(--font-size-m);
    color: var(--off-white);
    overflow: initial;
    position: relative;
    padding: 0 3rem;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
    &:after {
      content: '';
      position: absolute;
      bottom: -2rem;
      right: 0;
      width: 0;
      height: 0;
      border: 2rem solid transparent;
      border-top-color: var(--dark);
      border-bottom: 0;
      border-right: 0;
    }
    button {
      color: white;
      background: white;
    }
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--dark);
  ${ToastStyles};
`

Layout.Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
