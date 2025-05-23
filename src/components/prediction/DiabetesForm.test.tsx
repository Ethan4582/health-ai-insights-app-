import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DiabetesForm from './DiabetesForm';
import { PredictionProvider } from '@/context/PredictionContext';

// Create a mock function to use in tests
const mockPredictDisease = vi.fn();
const mockIsPredicting = false;

// Mock the context hook globally
vi.mock('@/context/PredictionContext', async () => {
  const actual = await vi.importActual('@/context/PredictionContext');
  return {
    ...actual,
    usePrediction: () => ({
      selectedDisease: 'diabetes',
      setPredictionResult: vi.fn(),
      predictDisease: mockPredictDisease,
      isPredicting: mockIsPredicting,
    }),
  };
});

describe('DiabetesForm', () => {
  beforeEach(() => {
    mockPredictDisease.mockClear();
  });

  it('renders all input fields', () => {
    render(
      <PredictionProvider>
        <DiabetesForm />
      </PredictionProvider>
    );

    expect(screen.getByLabelText(/pregnancies/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/glucose/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/blood pressure/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/skin thickness/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/insulin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bmi/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/diabetes pedigree function/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /predict/i })).toBeInTheDocument();
  });

  it('allows form submission with valid data', () => {
    render(
      <PredictionProvider>
        <DiabetesForm />
      </PredictionProvider>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/pregnancies/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/glucose/i), { target: { value: '120' } });
    fireEvent.change(screen.getByLabelText(/blood pressure/i), { target: { value: '70' } });
    fireEvent.change(screen.getByLabelText(/skin thickness/i), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText(/insulin/i), { target: { value: '80' } });
    fireEvent.change(screen.getByLabelText(/bmi/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/diabetes pedigree function/i), { target: { value: '0.5' } });
    fireEvent.change(screen.getByLabelText(/age/i), { target: { value: '30' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /predict/i }));

    // Check if mockPredictDisease was called
    expect(mockPredictDisease).toHaveBeenCalledWith('diabetes', {
      pregnancies: 1,
      glucose: 120,
      bloodPressure: 70,
      skinThickness: 20,
      insulin: 80,
      bmi: 25,
      diabetesPedigreeFunction: 0.5,
      age: 30
    });
  });
});
