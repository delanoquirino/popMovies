import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #14181B;
    color: #fff;
    }
    
    a {
      text-decoration: none;
      color: #78e08f;
      transition: all .3s ease-in-out;
    }

    a:hover {
      color: #68bd7b;
    }
`;
