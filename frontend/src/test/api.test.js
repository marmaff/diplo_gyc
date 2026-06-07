import axios from 'axios';
import { createProduct, getProducts } from '../services/api';

vi.mock('axios');

describe('api service', () => {
  it('calls GET /api/products', async () => {
    axios.get.mockResolvedValue({ data: [] });

    await getProducts();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/products');
  });

  it('calls POST /api/products with payload', async () => {
    const payload = { name: 'Nuevo', description: 'Desc', price: 12 };
    axios.post.mockResolvedValue({ data: { id: 1, ...payload } });

    await createProduct(payload);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/products', payload);
  });
});
