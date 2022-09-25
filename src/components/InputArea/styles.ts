import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;

  background: linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 50%, #191919 50%, #191919 100%);

  width: 100%;
`

export const Input = styled.input`
    border: none;
    border-radius: 8px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 16px;

    height: 54px;
    width: 650px;

    background: var(--gray-500);
`
