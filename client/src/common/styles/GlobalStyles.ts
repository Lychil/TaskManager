import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Inter', sans-serif;
line-height: 1.5;
-webkit-font-smoothing: antialiased;
}

ol, ul {
list-style: none;
}

img, picture, video, canvas, svg {
display: block;
max-width: 100%;
}

input, button, textarea, select {
font: inherit;
}

button {
background: none;
border: none;
cursor: pointer;
}

a {
text-decoration: none;
color: inherit;
}
`;

export default GlobalStyles;