
import React from 'react';
import { usePrediction } from '@/context/PredictionContext';
import { Card, CardContent } from '@/components/ui/card';

interface DiseaseTile {
  id: 'breast-cancer' | 'diabetes' | 'parkinsons';
  name: string;
  description: string;
  icon: string;
}

const diseases: DiseaseTile[] = [
  {
    id: 'breast-cancer',
    name: 'Breast Cancer',
    description: 'Predict the likelihood of breast cancer based on cell nucleus features',
    icon: '👩‍⚕️',
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    description: 'Predict the likelihood of diabetes based on health metrics',
    icon: '🩸',
  },
  {
    id: 'parkinsons',
    name: 'Parkinson\'s Disease',
    description: 'Predict Parkinson\'s disease risk based on voice recordings analysis',
    icon: '🧠',
  },
];

const DiseaseSelector = () => {
  const { setSelectedDisease } = usePrediction();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Select a Disease to Predict</h2>
        <p className="text-gray-600 mt-2">
          Our AI models can predict the likelihood of these conditions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diseases.map((disease) => (
          <Card 
            key={disease.id} 
            className="cursor-pointer border-2 hover:border-medical transition-all duration-300 card-hover"
            onClick={() => setSelectedDisease(disease.id)}
          >
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">{disease.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{disease.name}</h3>
                <p className="text-gray-600 text-sm">{disease.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiseaseSelector;
