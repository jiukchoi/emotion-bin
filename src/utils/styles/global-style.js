import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #ffffe5;
  }
`;
