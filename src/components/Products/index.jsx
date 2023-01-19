import React from 'react';
import 'aos/dist/aos.css';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElements.jsx';

const Products = ({ heading, data, cartItem, setCartItem, foodsRef, id }) => {
  return (
    <ProductsContainer id={id}>
      <ProductsHeading data-aos='fade-down'>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              onClick={() => setCartItem(cartItem + 1)}
              data-aos='fade-up-right'
            >
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
