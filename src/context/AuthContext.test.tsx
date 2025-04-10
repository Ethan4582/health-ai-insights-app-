
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

// Mock component that uses the auth context
const TestComponent = () => {
  const { user, isAuthenticated, login, logout, register } = useAuth();
  
  return (
    <div>
      <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      {user && <div data-testid="user-name">{user.name}</div>}
      <button data-testid="login-btn" onClick={() => login('test@example.com', 'password')}>Login</button>
      <button data-testid="logout-btn" onClick={logout}>Logout</button>
      <button data-testid="register-btn" onClick={() => register('Test User', 'test@example.com', 'password')}>Register</button>
    </div>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    }));
  });

  it('provides authentication state and functions', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    expect(screen.getByTestId('login-btn')).toBeInTheDocument();
    expect(screen.getByTestId('logout-btn')).toBeInTheDocument();
    expect(screen.getByTestId('register-btn')).toBeInTheDocument();
  });

  it('updates auth state on login and logout', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Initially not authenticated
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');

    // Login
    fireEvent.click(screen.getByTestId('login-btn'));
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
    });

    // Logout
    fireEvent.click(screen.getByTestId('logout-btn'));
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    });
  });

  it('registers a new user', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Register
    fireEvent.click(screen.getByTestId('register-btn'));
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      expect(screen.getByTestId('user-name')).toHaveTextContent('Test User');
    });
  });
});
