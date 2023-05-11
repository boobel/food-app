import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #000000;
    background: #636262;  /* fallback for old browsers */
  }
`;

export default GlobalStyle;
