import styled from 'styled-components';
import imgBg from '../../images/new-shii.jpeg';
import { Link } from 'react-router-dom';
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${imgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw-1300px) / 2);
`;
export const HeroItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight:bold @media screen and (max-width:650px) {
    width: 100%;
  }
`;
export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const Heroh1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #964B00;
  letter-spacing: 3px;
`;

export const Herobtn = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  padding: 1rem 4rem;
  border: none;
  background: #B236D1;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
