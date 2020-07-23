import { createGlobalStyle, css } from '@nfront/global-styles'

import { device } from '../utils'

// prettier-ignore
const StyledRoot = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  :root {
    --dark        : #16141a;
    --darker      : #090909;
    --red         : #ec1c24;
    --salmon      : #fa8072;
    --green       : #33ff33;
    --off-white   : #f5f5f5;
    --gray        : #7b797e;
    --light-gray  : #bbb;
    --font-size-xs: 0.8rem;
    --font-size-s : 1.2rem;
    --font-size-m : 1.6rem;
    --font-size-lg: 2rem;
    --max-width   : 140rem;
    --box-shadow  : 0 0 1rem 0.5rem rgba(0, 0, 0, 0.6);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    outline-color: transparent;
  }
`

// prettier-ignore
const StyledHtml = css`
  html,
  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    color: white;
  }

  @media ${device.mobileL} {
    html {
      font-size: 8px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li { list-style-type: none; } 
  h1 { font-size: 5rem; }
  h2 { font-size: 4rem; }
  h3 { font-size: 3rem; }
  h4 { font-size: 2rem; }
  p  { font-size: var(--font-size-m); }
  a  { text-decoration: none; }
  button { border: none; }
  input, button { cursor: pointer; }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: white;
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
