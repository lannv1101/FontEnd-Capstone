import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import 'aos/dist/aos.css';
import {
  HeroContainer,
  HeroItems,
  HeroContent,
  Heroh1,
  Herobtn,
  HeroP,
} from './HeroElements';

function Hero(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const cartItem = props.cartItem;
  return (
    <HeroContainer>
      <Navbar toggle={toggle} cartItem={cartItem} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent data-aos='fade-left'>
        <HeroItems>
          <Heroh1>Welcome to Little Lemon</Heroh1>
          <HeroP>Home of the favorites</HeroP>
          <Herobtn to='/booking'>Book a table</Herobtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
