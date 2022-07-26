import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    //box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]}
  }

  button{ 
    cursor: pointer;
  }

  a { 
    text-decoration: none;
  }

`