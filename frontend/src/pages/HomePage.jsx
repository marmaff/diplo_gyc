import { useEffect, useState } from 'react';
import HealthStatus from '../components/HealthStatus';
import ProductForm from '../components/ProductForm';
import { createProduct, getHealth, getProducts } from '../services/api';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [health, setHealth] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const loadHealth = async () => {
    const data = await getHealth();
    setHealth(data);
  };

  const handleCreateProduct = async (payload) => {
    const created = await createProduct(payload);
    setProducts((prev) => [...prev, created]);
  };

  useEffect(() => {
    loadProducts();
    loadHealth();
  }, []);

  return (
    <main>
      <h1>Productos</h1>
      <HealthStatus health={health} />
      <ProductForm onSubmit={handleCreateProduct} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
