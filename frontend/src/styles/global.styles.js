import { createGlobalStyle, css } from '@nfront/global-styles'

import { device } from '../utils'

const StyledRoot = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  :root {
    --dark: #16141a;
    --darker: #090909;
    --red: #ec1c24;
    --green: #33FF33;
    --off-white: #f5f5f5;
    --gray: #7b797e;
    --light-gray: #bbb;
    --super-small-font: 0.8rem;
    --small-font: 1.2rem;
    --regular-font: 1.6rem;
    --large-font: 2rem;
    --max-width: 118rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
  p  { font-size: var(--regular-font); }

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
