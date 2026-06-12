const { addProduct, listProducts } = require('../src/controllers/entityController');
const entityService = require('../src/services/entityService');

jest.mock('../src/services/entityService');

describe('entityController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns products from service on GET', async () => {
    const products = [{ id: 1, name: 'Notebook' }];
    entityService.getProducts.mockResolvedValue(products);
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await listProducts({}, res);

    expect(res.json).toHaveBeenCalledWith(products);
  });

  it('returns created product from service on POST', async () => {
    const payload = { name: 'Nuevo' };
    const created = { id: 10, ...payload };
    entityService.createProduct.mockResolvedValue(created);
    const req = { body: payload };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await addProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(created);
  });

  it('returns 500 when getProducts service fails on GET', async () => {
    entityService.getProducts.mockRejectedValue(new Error('fail'));
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await listProducts({}, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
  });

  it('returns 500 when createProduct service fails on POST', async () => {
    entityService.createProduct.mockRejectedValue(new Error('fail'));
    const req = { body: { name: 'X' } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await addProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
  });
});
