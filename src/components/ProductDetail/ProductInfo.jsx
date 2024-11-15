import React from 'react';
import './style.scss';

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price}원</p>
    </div>
  );
};

export default ProductInfo;