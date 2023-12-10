import getRemValue from '@/utils/getRemValue';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

   :root {
      /* color variables */
      --color-black: 0, 0, 0;
      --color-primary: 0, 61, 41;
      --color-secondary-gr: 245, 246, 246;
      --color-secondary-p: 255, 230, 204;
      --color-white: 255, 255, 255;
      --color-error: 255, 0, 0;
      
      /* sizing */
      --max-width : ${getRemValue(1400)};
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  html,
  body {
    color: rgb(var(--color-black));
    max-width: 100vw;
    overflow-x: hidden;
    background: rgb(var(--color-white));
    font-size: ${getRemValue(14)};
  }

  a {
    text-decoration: none;
    color: inherit;
    background: none;
  }

  label {
    cursor: pointer;
  }

  button {
    background: inherit;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  button:disabled, input:disabled{
    cursor: not-allowed;
    opacity: 0.3;
  }
  `;

export default GlobalStyles;
