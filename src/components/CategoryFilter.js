import React from 'react';
import styles from '../styles';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div style={styles.categoryFilter}>
      <h3 style={styles.filterTitle}>Categories</h3>
      <div style={styles.categoryList}>
        <button
          onClick={() => onCategoryChange('All')}
          style={{
            ...styles.categoryButton,
            ...(selectedCategory === 'All' ? styles.categoryButtonActive : {})
          }}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            style={{
              ...styles.categoryButton,
              ...(selectedCategory === category ? styles.categoryButtonActive : {})
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
