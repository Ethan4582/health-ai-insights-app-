
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { usePrediction } from '@/context/PredictionContext';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import DiseaseSelector from '@/components/prediction/DiseaseSelector';
import BreastCancerForm from '@/components/prediction/BreastCancerForm';
import DiabetesForm from '@/components/prediction/DiabetesForm';
import ParkinsonsForm from '@/components/prediction/ParkinsonsForm';
import PredictionResult from '@/components/prediction/PredictionResult';

const Dashboard = () => {
  const { user } = useAuth();
  const { selectedDisease, predictionResult } = usePrediction();

  const renderDiseaseForm = () => {
    if (predictionResult) {
      return <PredictionResult />;
    }

    switch (selectedDisease) {
      case 'breast-cancer':
        return <BreastCancerForm />;
      case 'diabetes':
        return <DiabetesForm />;
      case 'parkinsons':
        return <ParkinsonsForm />;
      default:
        return <DiseaseSelector />;
    }
  };

  return (
    <ProtectedLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {user?.name}
          </h1>
          <p className="text-gray-600">
            Use our AI-powered tools to predict disease likelihood based on your health data.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {renderDiseaseForm()}
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default Dashboard;
