import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const Container = styled.div`
  max-width: 100%;
  width: 600px;
  min-height: 550px;
  border-radius: 10px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6));
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProgressBar = styled.div`
  max-width: 100%;
  width: 100%;
  height: 16px;
  background: #fff;
  border-radius: 10px;
`;
export const ProgressBarDiv = styled.div`
  width: 33.33%;
  height: 100%;
  background: #e31837;
  transition: 0.5s;
  border-radius: 10px;
`;
export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
`;
export const Buttons = styled.button`
  background: #f4ce14;
  padding: 0.25rem 1.25rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`;
export const FormHeader = styled.div`
  text-align: center;
  padding: 1.5rem;
`;
export const FormTitle = styled.h1`
  font-size: 1.3rem;
  color: #fff;
`;
export const FormBody = styled.div``;
export const MainContainer = styled.div`
  position: relative;
  min-width: 330px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 630px;
  }
`;
export const TableLabels = styled.label`
  display: block;
  font-size: 1rem;
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const TableInputs = styled.input`
  position: relative;
  width: 100%;
  padding: 0.75rem 0.25rem;
  background: #e31837;
  outline: none;
  border-radius: 5px;
  color: #fff;
  border: none;
`;
export const TableSelect = styled.select`
  position: relative;
  width: 100%;
  padding: 0.75rem 0.25rem;
  background: #e31837;
  outline: none;
  border-radius: 5px;
  color: #fff;
  border: none;
`;
export const InfoInput = styled.input`
  position: relative;
  width: 75%;
  padding: 0.75rem 0.5rem;
  background: transparent;
  outline: none;
  border-radius: 50px;
  border: 2px solid #f4ce14;
  transition: 0.3s;
  color: #f1f1f1;
  &:focus {
    width: 100%;
    border-color: #495e57;
  }
`;
export const DetailBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
export const DetailTitle = styled.h1`
  font-size: 1rem;
  color: #fbfbfb;
`;
export const CreditDetail = styled.div`
  position: relative;
`;
export const CreditBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: center;
  place-items: center;
  margin: 1rem 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const CreditLabel = styled.label`
  font-size: 12px;
  color: #fff;
`;
export const CreditInput = styled.input`
  position: relative;
  width: 100%;
  padding: 0.5rem 1rem;
  display: block;
  outline: none;
  border: none;
  &:focus {
    border: 2px solid #000;
  }
`;
