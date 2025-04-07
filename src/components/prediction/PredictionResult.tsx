
import React from 'react';
import { usePrediction } from '@/context/PredictionContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatDate } from '@/lib/utils';

const PredictionResult = () => {
  const { predictionResult, clearPredictionResult, setSelectedDisease } = usePrediction();

  if (!predictionResult) {
    return null;
  }

  const { disease, probability, prediction, timestamp } = predictionResult;
  
  const getResultColor = () => {
    return prediction === 'Positive' ? 'text-danger' : 'text-success';
  };

  const getProgressColor = () => {
    return prediction === 'Positive' ? 'bg-danger' : 'bg-success';
  };

  const getDiseaseTitle = () => {
    switch (disease) {
      case 'breast-cancer':
        return 'Breast Cancer';
      case 'diabetes':
        return 'Diabetes';
      case 'parkinsons':
        return 'Parkinson\'s Disease';
      default:
        return 'Unknown Disease';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-2">
      <CardHeader className={prediction === 'Positive' ? 'bg-red-50' : 'bg-green-50'}>
        <CardTitle className="text-center text-2xl">Prediction Result</CardTitle>
        <CardDescription className="text-center">
          {formatDate(new Date(timestamp))}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-700">{getDiseaseTitle()}</h3>
            <div className="mt-2 text-3xl font-bold">
              <span className={getResultColor()}>
                {prediction === 'Positive' ? 'Positive Risk' : 'Negative Risk'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Likelihood</span>
              <span className="text-sm font-bold">{Math.round(probability)}%</span>
            </div>
            <Progress 
              value={probability} 
              className={`h-3 ${getProgressColor()}`} 
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">What does this mean?</h4>
            <p className="text-sm text-gray-600">
              {prediction === 'Positive'
                ? `Our model indicates a ${Math.round(probability)}% likelihood of ${getDiseaseTitle()}. This is a screening result and not a diagnosis. Please consult with a healthcare professional.`
                : `Our model indicates a low risk of ${getDiseaseTitle()} with a ${Math.round(probability)}% probability. However, regular check-ups are still recommended.`
              }
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline"
          onClick={() => {
            clearPredictionResult();
          }}
        >
          Try Different Inputs
        </Button>
        
        <Button 
          onClick={() => {
            clearPredictionResult();
            setSelectedDisease(null);
          }}
        >
          Predict Another Disease
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PredictionResult;
