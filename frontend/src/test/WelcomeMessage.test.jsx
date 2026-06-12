import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WelcomeMessage from '../components/WelcomeMessage';

describe('WelcomeMessage Component', () => {
  it('debe mostrar el título de bienvenidda', () => {
    render(<WelcomeMessage />);
    
    // Validamos que el texto esté presente en el documento
    const titleElement = screen.getByText(/Bienvenido a la Aplicación/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('debe mostrar el párrafo descriptivo', () => {
    render(<WelcomeMessage />);
    
    // Validamos que el texto del párrafo esté presente
    const paragraphElement = screen.getByText(/Este es un texto de prueba para validar el renderizado/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
