import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0; // tira as bordas do elemento selecionado
    box-sizing: border-box;
  }

  body, input, button {
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
    font-size: 0.875rem
  }

  button {
    cursor: pointer;
  }
`