import { useState, useEffect } from 'react';

const useProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ProductListComponent, setProductListComponent] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await import('../products.json');
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
        const module = await import('../components/ProductList');
        setProductListComponent(() => module.default);
      } catch (error) {
        console.error("Lỗi khi lấy Component ProductList: ", error);
      }
    };
    loadComponent();
  }, []);

  return { productsData, isLoading, ProductListComponent };
};

export default useProducts;
