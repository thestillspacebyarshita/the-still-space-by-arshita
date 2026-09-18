import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from '../Services';

describe('Services', () => {
  it('renders the section heading and all service cards', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /my services/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /individual therapy for adults/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy for adolescents & parents/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy for students/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy for homemakers/i })).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByText(/one-on-one sessions/i)).toBeInTheDocument();
    expect(screen.getByText(/teens and parents navigating/i)).toBeInTheDocument();
    expect(screen.getByText(/exam anxiety, academic pressure/i)).toBeInTheDocument();
    expect(screen.getByText(/navigating life transitions, relationship and family dynamics/i)).toBeInTheDocument();
  });

  it('links each card to its service detail page', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /individual therapy for adults/i })).toHaveAttribute(
      'href',
      '/services/individual-therapy-for-adults'
    );
    expect(screen.getByRole('link', { name: /therapy for adolescents & parents/i })).toHaveAttribute(
      'href',
      '/services/therapy-for-adolescents-parents'
    );
    expect(screen.getByRole('link', { name: /therapy for students/i })).toHaveAttribute(
      'href',
      '/services/therapy-for-students'
    );
    expect(screen.getByRole('link', { name: /therapy for homemakers/i })).toHaveAttribute(
      'href',
      '/services/therapy-for-homemakers'
    );
  });
});