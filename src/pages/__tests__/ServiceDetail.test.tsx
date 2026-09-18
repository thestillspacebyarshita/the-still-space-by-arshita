import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail';

describe('ServiceDetail', () => {
  it('renders the service title and Therapy Process', () => {
    render(
      <MemoryRouter initialEntries={['/services/individual-therapy-for-adults']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /individual therapy for adults/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy process/i })).toBeInTheDocument();
  });

  it('renders the process steps', () => {
    render(
      <MemoryRouter initialEntries={['/services/therapy-for-adolescents-parents']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getAllByRole('heading', { name: /therapy for adolescents & parents/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /reach out/i })).toBeInTheDocument();
  });

  it('renders the pricing plans for the matched service', () => {
    render(
      <MemoryRouter initialEntries={['/services/therapy-for-adolescents-parents']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getAllByText(/₹1,100/).length).toBeGreaterThan(0);
    expect(screen.getByText(/a gentle beginning/i)).toBeInTheDocument();
    expect(screen.getAllByText(/pay in 2 installments/i).length).toBeGreaterThan(0);
  });

  it('shows the Book Your First Session CTA', () => {
    render(
      <MemoryRouter initialEntries={['/services/individual-therapy-for-adults']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /book your first session/i })).toHaveAttribute(
      'href',
      'https://forms.gle/p3LY41jq33sCv1kq7'
    );
  });
});