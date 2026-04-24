import React, { useState, useCallback, useMemo } from 'react';
import productsData from './products.json';
import './shop.css';

import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const MiniShop = () => {
  console.log("Rendering MiniShop (Main Container)");

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(productsData.map(p => p.category));
    return Array.from(cats);
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchWishlist = showWishlistOnly ? wishlist.includes(p.id) : true;
      return matchCategory && matchSearch && matchWishlist;
    });
  }, [searchQuery, selectedCategory, showWishlistOnly, wishlist]);

  // useCallback 1
  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // useCallback 2
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // useCallback 3
  const handleAddToCart = useCallback((product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  // useCallback 4
  const handleUpdateCartQuantity = useCallback((id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  }, []);

  // useCallback 5
  const handleToggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="minishop-container">
      <header className="minishop-header">
        <h1 className="minishop-logo">MiniShop</h1>
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
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
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
