import React, { createContext, useState, useContext } from 'react';
import { toast } from 'sonner';

type Disease = 'breast-cancer' | 'diabetes' | 'parkinsons';

interface PredictionResult {
  disease: Disease;
  probability: number;
  prediction: 'Positive' | 'Negative';
  timestamp: string;
}

interface PredictionHistory {
  id: string;
  disease: Disease;
  result: PredictionResult;
  inputs: Record<string, number>;
  createdAt: string;
}

interface PredictionContextType {
  selectedDisease: Disease | null;
  predictionResult: PredictionResult | null;
  predictionHistory: PredictionHistory[];
  isPredicting: boolean;
  setSelectedDisease: (disease: Disease | null) => void;
  predictDisease: (disease: Disease, inputs: Record<string, number>) => Promise<void>;
  clearPredictionResult: () => void;
}

const PredictionContext = createContext<PredictionContextType>({} as PredictionContextType);

export const usePrediction = () => useContext(PredictionContext);

export const PredictionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [predictionHistory, setPredictionHistory] = useState<PredictionHistory[]>([]);
  const [isPredicting, setIsPredicting] = useState(false);

  const predictDisease = async (disease: Disease, inputs: Record<string, number>) => {
    setIsPredicting(true);
    
    try {
      // Simulate API call to ML model
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock predictions based on the disease
      let probability: number;
      let prediction: 'Positive' | 'Negative';
      
      // Randomly determine the outcome for the demo
      const randomValue = Math.random();
      probability = disease === 'breast-cancer' 
        ? randomValue * 100
        : disease === 'diabetes'
          ? randomValue * 100
          : randomValue * 100;
      
      prediction = probability > 50 ? 'Positive' : 'Negative';
      
      const result: PredictionResult = {
        disease,
        probability,
        prediction,
        timestamp: new Date().toISOString(),
      };
      
      setPredictionResult(result);
      
      // Add to prediction history
      const newPredictionHistory: PredictionHistory = {
        id: Date.now().toString(),
        disease,
        result,
        inputs,
        createdAt: new Date().toISOString(),
      };
      
      setPredictionHistory(prev => [newPredictionHistory, ...prev]);
      
      toast.success(`Prediction complete for ${disease.replace('-', ' ')}`);
    } catch (error) {
      console.error('Prediction error:', error);
      toast.error('Failed to process prediction');
    } finally {
      setIsPredicting(false);
    }
  };

  const clearPredictionResult = () => {
    setPredictionResult(null);
  };

  return (
    <PredictionContext.Provider value={{
      selectedDisease,
      predictionResult,
      predictionHistory,
      isPredicting,
      setSelectedDisease,
      predictDisease,
      clearPredictionResult
    }}>
      {children}
    </PredictionContext.Provider>
  );
};
