import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  it('renders all form fields and submit button', () => {
    render(<ProductForm onSubmit={vi.fn()} />);

    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descripción')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Precio')).toBeInTheDocument();
    expect(screen.getByText('Agregar')).toBeInTheDocument();
  });

  it('calls onSubmit with correct payload when form is submitted', async () => {
    const mockSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ProductForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { name: 'name', value: 'Teclado' } });
    fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { name: 'description', value: 'Mecánico' } });
    fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { name: 'price', value: '89' } });
    fireEvent.click(screen.getByText('Agregar'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'Teclado',
        description: 'Mecánico',
        price: 89,
      });
    });
  });

  it('resets form fields after successful submit', async () => {
    const mockSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ProductForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByPlaceholderText('Nombre');
    fireEvent.change(nameInput, { target: { name: 'name', value: 'Monitor' } });
    fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { name: 'description', value: 'HD' } });
    fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { name: 'price', value: '199' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Agregar' }).closest('form'));

    await waitFor(() => {
      expect(nameInput.value).toBe('');
    });
  });
});
