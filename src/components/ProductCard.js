import React from 'react';
import styles from '../styles';
import formatCurrency from '../utils/formatCurrency';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.productImage}
      />
      <div style={styles.productInfo}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.productCategory}>{product.category}</p>
        <p style={styles.productDescription}>{product.description}</p>
        <div style={styles.productFooter}>
          <span style={styles.productPrice}>{formatCurrency(product.price)}</span>
          <button
            onClick={() => onAddToCart(product)}
            style={styles.addToCartButton}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
