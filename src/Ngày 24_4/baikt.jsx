import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './shop.css';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import Cart from './components/Cart';

const MiniShop = () => {
  console.log("Rendering MiniShop");

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [ProductListComponent, setProductListComponent] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await import('./products.json');
        const data = response.default || response;

        setTimeout(() => {
          setProductsData(data);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        console.error("Lỗi khi gọi API sản phẩm:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('./components/ProductList');

        setProductListComponent(() => module.default);
      } catch (error) {
        console.error("Lỗi khi lấy Component ProductList: ", error);
      }
    };
    loadComponent();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(productsData.map(p => p.category));
    return Array.from(cats);
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchWishlist = showWishlistOnly ? wishlist.includes(p.id) : true;
      return matchCategory && matchSearch && matchWishlist;
    });
  }, [productsData, searchQuery, selectedCategory, showWishlistOnly, wishlist]);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

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

  const handleUpdateCartQuantity = useCallback((id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  }, []);

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
