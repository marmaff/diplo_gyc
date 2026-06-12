import { render, screen } from '@testing-library/react';
import HealthStatus from '../components/HealthStatus';

describe('HealthStatus', () => {
  it('shows received status', () => {
    render(<HealthStatus health={{ status: 'ok', app: 'bff' }} />);

    expect(screen.getByText('status: ok')).toBeInTheDocument();
    expect(screen.getByText('app: bff')).toBeInTheDocument();
  });

  it('shows loading message when health is null', () => {
    render(<HealthStatus health={null} />);

    expect(screen.getByText('Cargando health...')).toBeInTheDocument();
  });
});
