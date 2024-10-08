import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background-color: #121212;
  }

  a {
    text-decoration: none; /* Remove sublinhado */
    outline: none; /* Remove contorno */
    border: none; /* Remove borda */
  }
`;


export default GlobalStyles;
