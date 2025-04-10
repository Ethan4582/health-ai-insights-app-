
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedLayout from './ProtectedLayout';
import { AuthProvider } from '@/context/AuthContext';

// Mock useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

// Mock toast
vi.mock('sonner', () => ({
  toast: {
    error: vi.fn(),
  },
}));

describe('ProtectedLayout', () => {
  it('renders loading state initially', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProtectedLayout>
            <div data-testid="protected-content">Protected Content</div>
          </ProtectedLayout>
        </AuthProvider>
      </BrowserRouter>
    );

    // Initially in loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
