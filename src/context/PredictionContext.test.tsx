
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PredictionProvider, usePrediction } from './PredictionContext';

// Mock component that uses the prediction context
const TestComponent = () => {
  const { 
    selectedDisease, 
    setSelectedDisease, 
    predictionResult, 
    setPredictionResult, 
    resetPrediction 
  } = usePrediction();
  
  return (
    <div>
      <div data-testid="selected-disease">{selectedDisease || 'none'}</div>
      <div data-testid="prediction-result">{predictionResult ? 'has-result' : 'no-result'}</div>
      <button 
        data-testid="select-disease-btn" 
        onClick={() => setSelectedDisease('diabetes')}
      >
        Select Disease
      </button>
      <button 
        data-testid="set-result-btn" 
        onClick={() => setPredictionResult({ disease: 'diabetes', probability: 0.75, prediction: 'positive' })}
      >
        Set Result
      </button>
      <button data-testid="reset-btn" onClick={resetPrediction}>Reset</button>
    </div>
  );
};

describe('PredictionContext', () => {
  it('provides prediction state and functions', () => {
    render(
      <PredictionProvider>
        <TestComponent />
      </PredictionProvider>
    );

    expect(screen.getByTestId('selected-disease')).toHaveTextContent('none');
    expect(screen.getByTestId('prediction-result')).toHaveTextContent('no-result');
  });

  it('updates selected disease', () => {
    render(
      <PredictionProvider>
        <TestComponent />
      </PredictionProvider>
    );

    fireEvent.click(screen.getByTestId('select-disease-btn'));
    expect(screen.getByTestId('selected-disease')).toHaveTextContent('diabetes');
  });

  it('sets prediction result', () => {
    render(
      <PredictionProvider>
        <TestComponent />
      </PredictionProvider>
    );

    fireEvent.click(screen.getByTestId('set-result-btn'));
    expect(screen.getByTestId('prediction-result')).toHaveTextContent('has-result');
  });

  it('resets prediction state', () => {
    render(
      <PredictionProvider>
        <TestComponent />
      </PredictionProvider>
    );

    // Set disease and result first
    fireEvent.click(screen.getByTestId('select-disease-btn'));
    fireEvent.click(screen.getByTestId('set-result-btn'));
    
    // Then reset
    fireEvent.click(screen.getByTestId('reset-btn'));
    
    // Check if state was reset
    expect(screen.getByTestId('selected-disease')).toHaveTextContent('none');
    expect(screen.getByTestId('prediction-result')).toHaveTextContent('no-result');
  });
});
