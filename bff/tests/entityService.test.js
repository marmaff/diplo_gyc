const axios = require('axios');
const { createProduct, getProducts } = require('../src/services/entityService');

jest.mock('axios');

describe('entityService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls backend GET endpoint', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Notebook' }] });

    await getProducts();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/products');
  });

  it('calls backend POST endpoint with payload', async () => {
    const payload = { name: 'Nuevo', description: 'Desc', price: 1.2 };
    axios.post.mockResolvedValue({ data: { id: 99, ...payload } });

    await createProduct(payload);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/products', payload);
  });
});
