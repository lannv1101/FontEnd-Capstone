import React, { useEffect, useState } from 'react';
import {
  Nav,
  NavLink,
  NavIcon,
  MenuBox,
  List,
  Cart,
  LogoBox,
  LogoImg,
} from './NavbarElements';
import logo from '../../images/logo.png';

const Navbar = ({ toggle, cartItem }) => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 720) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <>
      <Nav
        style={
          color
            ? { background: '#0d0909' }
            : {
                background:
                  'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6))',
              }
        }
      >
        <LogoBox>
          <NavLink to='/'>
            <LogoImg src={logo} alt='logo' />
          </NavLink>
        </LogoBox>
        <MenuBox>
          <NavIcon onClick={toggle}>
            <List />
          </NavIcon>
          <NavIcon>
            <Cart />
            <span style={{ margin: '0 .3rem' }}>{cartItem}</span>
          </NavIcon>
        </MenuBox>
      </Nav>
    </>
  );
};

export default Navbar;
