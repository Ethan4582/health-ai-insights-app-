
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { PredictionProvider } from '@/context/PredictionContext';

// Mock the contexts
vi.mock('@/context/AuthContext', async () => {
  const actual = await vi.importActual('@/context/AuthContext');
  return {
    ...actual,
    useAuth: () => ({
      user: { id: '1', name: 'Test User', email: 'test@example.com' },
      isAuthenticated: true,
    }),
  };
});

// Mock the protected layout
vi.mock('@/components/layout/ProtectedLayout', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="protected-layout">{children}</div>,
}));

// Mock the disease components
vi.mock('@/components/prediction/DiseaseSelector', () => ({
  default: () => <div data-testid="disease-selector">Disease Selector</div>,
}));

vi.mock('@/components/prediction/BreastCancerForm', () => ({
  default: () => <div data-testid="breast-cancer-form">Breast Cancer Form</div>,
}));

vi.mock('@/components/prediction/DiabetesForm', () => ({
  default: () => <div data-testid="diabetes-form">Diabetes Form</div>,
}));

vi.mock('@/components/prediction/ParkinsonsForm', () => ({
  default: () => <div data-testid="parkinsons-form">Parkinsons Form</div>,
}));

vi.mock('@/components/prediction/PredictionResult', () => ({
  default: () => <div data-testid="prediction-result">Prediction Result</div>,
}));

describe('Dashboard', () => {
  it('renders the welcome message with user name', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <PredictionProvider>
            <Dashboard />
          </PredictionProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Welcome, Test User/i)).toBeInTheDocument();
  });

  it('renders the disease selector when no disease is selected', () => {
    vi.mock('@/context/PredictionContext', async () => {
      const actual = await vi.importActual('@/context/PredictionContext');
      return {
        ...actual,
        usePrediction: () => ({
          selectedDisease: null,
          predictionResult: null,
        }),
      };
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <PredictionProvider>
            <Dashboard />
          </PredictionProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('disease-selector')).toBeInTheDocument();
  });

  it('renders the breast cancer form when selected', () => {
    vi.mock('@/context/PredictionContext', async () => {
      const actual = await vi.importActual('@/context/PredictionContext');
      return {
        ...actual,
        usePrediction: () => ({
          selectedDisease: 'breast-cancer',
          predictionResult: null,
        }),
      };
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <PredictionProvider>
            <Dashboard />
          </PredictionProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('breast-cancer-form')).toBeInTheDocument();
  });
});
