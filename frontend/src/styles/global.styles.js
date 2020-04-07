import { createGlobalStyle, css } from '@nfront/global-styles'

import { device } from '../utils'

const StyledRoot = css`
  :root {
    --dark: #1b1920;
    --darker: #0e0e10;
    --red: #ec1c24;
    --off-white: #e1e1e1;
    --gray: #999;
    --light-gray: #bbb;
    --small-font: 1rem;
    --regular-font: 1.8rem;
    --large-font: 2.6rem;
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
    font-family: Arial, Helvetica, sans-serif;
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
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--darker);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--off-white);
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--off-white);
  }
`

const GlobalStyles = createGlobalStyle`
  ${StyledRoot}
  ${StyledHtml}
`

export default GlobalStyles
