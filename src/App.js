import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';

import products from './data/products';
import useCart from './hooks/useCart';
import styles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    getItemCount
  } = useCart();

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.app}>
      <Header
        cartItemCount={getItemCount()}
        onCartClick={() => setShowCart(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main style={styles.main}>
        <div style={styles.sidebar}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        <div style={styles.content}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <div style={styles.resultsHeader}>
            <h2>
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              <span style={styles.resultCount}>({filteredProducts.length} items)</span>
            </h2>
          </div>
          
          <ProductGrid
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
      </main>
      
      {showCart && (
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          onClose={() => setShowCart(false)}
          getTotal={getTotal}
        />
      )}
    </div>
  );
};

export default App;
