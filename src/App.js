import React, { useState } from 'react';
import { Globalstyle } from './globalstyle';
import { Routes, Route } from 'react-router';
import Hero from './components/Hero/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Success from './components/Success';
import Aos from 'aos';

function App() {
  const [cartItem, setCartItem] = useState(0);
  Aos.init({ duration: 1500, delay: 500 });
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route
          path='/'
          exact
          element={[
            <Hero cartItem={cartItem} setCartItem={setCartItem} />,
            <Products
              heading='Our Top Picks'
              id='fast-foods'
              data={productData}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />,
            <Feature />,
            <Products
              heading='Our Top Deserts'
              id='deserts'
              data={productDataTwo}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />,
            <Footer />,
          ]}
        ></Route>
        <Route path='/booking' element={<Form />}></Route>
        <Route path='/success' element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;
