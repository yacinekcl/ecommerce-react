import React from 'react';
import styles from '../styles';
import formatCurrency from '../utils/formatCurrency';

const Cart = ({ cart, onUpdateQuantity, onRemoveFromCart, onClose, getTotal }) => {
  return (
    <div style={styles.cartOverlay}>
      <div style={styles.cartModal}>
        <div style={styles.cartHeader}>
          <h2>Shopping Cart</h2>
          <button onClick={onClose} style={styles.closeButton}>×</button>
        </div>
        <div style={styles.cartContent}>
          {cart.length === 0 ? (
            <p style={styles.emptyCart}>Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                  <div style={styles.cartItemInfo}>
                    <h4>{item.name}</h4>
                    <p>{formatCurrency(item.price)}</p>
                  </div>
                  <div style={styles.cartItemControls}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={styles.quantityButton}
                    >
                      -
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={styles.quantityButton}
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div style={styles.cartTotal}>
                <h3>Total: {formatCurrency(getTotal())}</h3>
                <button style={styles.checkoutButton}>Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
