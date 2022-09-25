import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-top: 64px;
  border-top: 1px solid var(--gray-400);
  
  justify-content: center;
  align-items: center;

  color: var(--gray-300);
`

export const TextBold = styled.div`
  font-weight: 700;

  margin-top: 16px;
`
