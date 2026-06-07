import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import * as api from '../services/api';

vi.mock('../services/api', () => ({
  getProducts: vi.fn(),
  getHealth: vi.fn(),
  createProduct: vi.fn(),
}));

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    api.getProducts.mockResolvedValue([
      { id: 1, name: 'Notebook', description: 'Ultrabook', price: 1000 },
    ]);
    api.getHealth.mockResolvedValue({ status: 'ok', app: 'bff' });
    api.createProduct.mockImplementation(async (payload) => ({ id: 2, ...payload }));
  });

  it('renders product list loaded from service', async () => {
    render(<HomePage />);

    expect(await screen.findByText('Notebook - Ultrabook - $1000')).toBeInTheDocument();
  });

  it('submits form and calls createProduct with payload', async () => {
    render(<HomePage />);

    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Mouse' } });
    fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { value: 'Inalámbrico' } });
    fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { value: '50' } });
    fireEvent.click(screen.getByText('Agregar'));

    await waitFor(() => {
      expect(api.createProduct).toHaveBeenCalledWith({
        name: 'Mouse',
        description: 'Inalámbrico',
        price: 50,
      });
    });
  });
});
