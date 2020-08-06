import { createGlobalStyle, css } from '@nfront/global-styles'

import { device } from'../shared/utils'

const StyledRoot = css`
  :root {
    --dark: #16141a;
    --darker: #090909;
    --red: #ec1c24;
    --salmon: #fa8072;
    --green: #3f3;
    --off-white: #ededed;
    --gray: #7b797e;
    --light-gray: #bbb;
    --font-size-xs: 0.8rem;
    --font-size-s: 1.2rem;
    --font-size-m: 1.6rem;
    --font-size-lg: 2rem;
    --max-width: 120rem;
    --box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.6);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
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
  p { font-size: var(--font-size-m); }
  a { text-decoration: none; }
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
