import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: all ease .2s;
}

body {
  font-family: "Roboto", sans-serif;
}
`;

export default GlobalStyles;
