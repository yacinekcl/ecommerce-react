const styles = {
 app: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  searchContainer: {
    flex: 1,
    maxWidth: '400px'
  },
  searchInput: {
    width: '100%',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem'
  },
  cartButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
    display: 'flex',
    gap: '2rem'
  },
  sidebar: {
    width: '250px',
    flexShrink: 0
  },
  content: {
    flex: 1
  },
  searchBar: {
    marginBottom: '2rem'
  },
  searchBarInput: {
    width: '100%',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  categoryFilter: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  filterTitle: {
    margin: '0 0 1rem 0',
    color: '#2c3e50'
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  categoryButton: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s ease'
  },
  categoryButtonActive: {
    backgroundColor: '#3498db',
    color: 'white',
    borderColor: '#3498db'
  },
  resultsHeader: {
    marginBottom: '2rem'
  },
  resultCount: {
    color: '#666',
    fontSize: '0.9em',
    fontWeight: 'normal'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  productImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  },
  productInfo: {
    padding: '1.5rem'
  },
  productName: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.2rem',
    color: '#2c3e50'
  },
  productCategory: {
    margin: '0 0 0.5rem 0',
    color: '#3498db',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  productDescription: {
    margin: '0 0 1rem 0',
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.4'
  },
  productFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productPrice: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#e74c3c'
  },
  addToCartButton: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  cartOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  cartModal: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  cartHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666'
  },
  cartContent: {
    padding: '1.5rem',
    overflow: 'auto'
  },
  emptyCart: {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.1rem'
  },
  cartItem: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem 0',
    borderBottom: '1px solid #eee'
  },
  cartItemImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  cartItemInfo: {
    flex: 1
  },
  cartItemControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  quantityButton: {
    width: '30px',
    height: '30px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  quantity: {
    padding: '0 0.5rem',
    minWidth: '40px',
    textAlign: 'center'
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  cartTotal: {
    borderTop: '2px solid #eee',
    paddingTop: '1rem',
    marginTop: '1rem',
    textAlign: 'center'
  },
  checkoutButton: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '1rem'
  }
};

export default styles;