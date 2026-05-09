import React from 'react';
import './shop.css';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import Cart from './components/Cart';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import useWishlist from './hooks/useWishlist';
import useFilters from './hooks/useFilters';

const MiniShop = () => {
  console.log("Rendering MiniShop");

  const { productsData, isLoading, ProductListComponent } = useProducts();
  
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    handleAddToCart, 
    handleUpdateCartQuantity, 
    cartItemCount 
  } = useCart();

  const { 
    wishlist, 
    showWishlistOnly, 
    setShowWishlistOnly, 
    handleToggleWishlist 
  } = useWishlist();

  const { 
    searchQuery, 
    selectedCategory, 
    categories, 
    filteredProducts, 
    handleSearchChange, 
    handleCategorySelect 
  } = useFilters(productsData, wishlist, showWishlistOnly);

  return (
    <div className="minishop-container">
      <header className="minishop-header">
        <h1 className="minishop-logo">HƯƠNG</h1>

        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            className="cart-header-btn"
            onClick={() => setShowWishlistOnly(!showWishlistOnly)}
            style={{ color: showWishlistOnly ? '#ef4444' : 'inherit' }}
          >
            {showWishlistOnly ? '❤️ Wishlist ' : '🤍 Wishlist '}
            {wishlist.length > 0 && `(${wishlist.length})`}
          </button>
          <button className="cart-header-btn" onClick={() => setIsCartOpen(true)}>
            🛒 Cart {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
        </div>
      </header>

      <main className="minishop-main">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        <div className="minishop-content">
          {isLoading || !ProductListComponent ? (
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#ff69b4', fontWeight: 'bold' }}>
              Đang tải...
            </div>
          ) : (
            <ProductListComponent
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
          )}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
      />
    </div>
  );
};

export default MiniShop;
