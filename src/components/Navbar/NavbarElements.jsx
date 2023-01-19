import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BsList, BsCart } from 'react-icons/bs';

export const Nav = styled.nav`
  position: fixed;
  max-width: 100%;
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  padding: 3rem;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #B236D1;
`;

export const List = styled(BsList)`
  font-size: 2rem;
`;
export const Cart = styled(BsCart)`
  font-size: 2rem;
`;
export const MenuBox = styled.div`
  display: flex;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`;
export const LogoBox = styled.div`
  position: relative;
  width: 60px;
  min-height: 60px;
  @media screen and (min-width: 768px) {
    .logo-box,
    .form-nav .img-box {
        width: 70px;
        min-height: 100px;
    }
`;
export const LogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
