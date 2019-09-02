import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // css reset

const GlobalStyle = createGlobalStyle`
    ${reset};
        body {
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
            color: rgb(72, 72, 72);
        }
`;

export default GlobalStyle;