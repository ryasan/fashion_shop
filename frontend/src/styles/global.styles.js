import { createGlobalStyle, css } from '@nfront/global-styles'

import { device } from '../shared/utils'

const StyledRoot = css`
  :root {
    --dark: #16141a;
    --darker: #090909;
    --red: #f03151;
    --salmon: #fa8072;
    --green: #3f3;
    --off-white: #ededed;
    --gray: #7b797e;
    --light-gray: #bbb;
    --font-size-s: 0.8rem;
    --font-size-m: 1.2rem;
    --font-size-lg: 1.6rem;
    --font-size-xlg: 2rem;
    --max-width: 120rem;
    --box-shadow-all-around: 0 0 2.8rem 0.2rem rgba(0, 0, 0, 0.25),
      0 0 1rem 0.1rem rgba(0, 0, 0, 0.22);
    --box-shadow-xs: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12),
      0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
    --box-shadow-s: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
      0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
    --box-shadow-m: 0 1rem 2rem rgba(0, 0, 0, 0.19),
      0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
    --box-shadow-lg: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
      0 1rem 1rem rgba(0, 0, 0, 0.22);
    --box-shadow-xlg: 0 1.9rem 3.8rem rgba(0, 0, 0, 0.3),
      0 1.5rem 1.2rem rgba(0, 0, 0, 0.22);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-weight: 400;
    outline-color: transparent;
  }
`

// prettier-ignore
const StyledHtml = css`
  html,
  body {
    box-sizing: border-box;
    color: white;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 10px;
    margin: 0;
  }

  @media ${device.mobileL} {
    html { font-size: 8px; } }

  ul {
    margin: 0;
    padding: 0;
  }

  li { list-style-type: none; } 
  h1 { font-size: 5rem; }
  h2 { font-size: 4rem; }
  h3 { font-size: 3rem; }
  h4 { font-size: 2rem; }
  p { font-size: var(--font-size-lg); }
  a { text-decoration: none; color: white; }
  button { border: 0; }
  
  input,
  button { cursor: pointer; }

  ::-webkit-scrollbar {
    background: white;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--darker);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--dark);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #f5f5f5;
  }
`

const GlobalStyles = createGlobalStyle`
  ${StyledRoot}
  ${StyledHtml}
`

export default GlobalStyles
