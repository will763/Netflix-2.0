import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
      background: #141414;
      font-family: 'Arial', Times, serif;
      color: white;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-overflow-style: none;
       scrollbar-width: none; 
      ::-webkit-scrollbar {display: none;}
    }



`;