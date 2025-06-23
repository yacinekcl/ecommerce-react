import React from 'react';
import styles from '../styles';

const Header = ({ cartItemCount, onCartClick, searchTerm, onSearchChange }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>TechStore DZ</h1>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <button
          onClick={onCartClick}
          style={styles.cartButton}
        >
          🛒 Cart ({cartItemCount})
        </button>
      </div>
    </header>
  );
};

export default Header;
