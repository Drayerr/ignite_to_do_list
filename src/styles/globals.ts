import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0; // tira as bordas do elemento selecionado
    box-sizing: border-box;
  }

  :root {
  --white: #FFFFFFFF;

  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A;
  --gray-700: #0D0D0D;

  --purple: #8284FA;
  --purple-dark: #5E60CE;

  --blue: #4EA8DE;
  --blue-dark: #1E6F9F;

  --danger:#E25858;
}

  body, input, button {
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
    font-size: 0.875rem
  }

  body {
    background: var(--gray-600);
    color: var(--gray-100);
  }

  button {
    cursor: pointer;
  }
`