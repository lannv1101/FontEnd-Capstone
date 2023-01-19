import styled from 'styled-components';

export const SuccessContent = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SuccessItems = styled.div`
  text-align: center;
  color: #fff;
  padding: 2rem;
`;
export const SuccessTitle = styled.h1`
  font-size: 3.5rem;
  color: #f1f1f1;
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }
`;
export const SuccessNote = styled.h2`
  font-size: 1rem;
  color: #f1f1f1;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
