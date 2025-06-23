import React from 'react';
import styles from '../styles';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for computer hardware..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={styles.searchBarInput}
      />
    </div>
  );
};

export default SearchBar;
