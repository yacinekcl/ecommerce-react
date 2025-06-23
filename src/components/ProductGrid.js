import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div style={styles.productGrid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
