import { render, screen } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';

vi.mock('../services/api', () => ({
  getProducts: vi.fn(),
  getHealth: vi.fn(),
  createProduct: vi.fn(),
}));

describe('App', () => {
  it('renders without crashing and displays the main heading', async () => {
    api.getProducts.mockResolvedValue([]);
    api.getHealth.mockResolvedValue({ status: 'ok', app: 'bff' });

    render(<App />);

    expect(await screen.findByText('Productos')).toBeInTheDocument();
  });
});
