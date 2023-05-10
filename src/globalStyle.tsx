import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #b99393;
    background: #603813;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #776256, #684320);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #776256, #684320); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #c9c2c2;
  opacity: 1; /* Firefox */
}

  }

`;

export default GlobalStyle;
