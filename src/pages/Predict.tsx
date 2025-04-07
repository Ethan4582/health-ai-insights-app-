
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePrediction } from '@/context/PredictionContext';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import BreastCancerForm from '@/components/prediction/BreastCancerForm';
import DiabetesForm from '@/components/prediction/DiabetesForm';
import ParkinsonsForm from '@/components/prediction/ParkinsonsForm';
import PredictionResult from '@/components/prediction/PredictionResult';

type PredictParams = {
  disease: string;
};

const Predict = () => {
  const { disease } = useParams<PredictParams>();
  const { selectedDisease, setSelectedDisease, predictionResult } = usePrediction();
  const navigate = useNavigate();

  useEffect(() => {
    if (disease) {
      // Check if the disease param is valid
      if (['breast-cancer', 'diabetes', 'parkinsons'].includes(disease)) {
        setSelectedDisease(disease as any);
      } else {
        navigate('/dashboard');
      }
    }
  }, [disease, navigate, setSelectedDisease]);

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
        return (
          <div className="text-center py-10">
            <p>Loading prediction form...</p>
          </div>
        );
    }
  };

  return (
    <ProtectedLayout>
      <div>
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/dashboard')} 
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="ml-1">Back to Dashboard</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedDisease === 'breast-cancer' ? 'Breast Cancer Prediction' : 
             selectedDisease === 'diabetes' ? 'Diabetes Prediction' : 
             selectedDisease === 'parkinsons' ? 'Parkinson\'s Disease Prediction' : 
             'Disease Prediction'}
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {renderDiseaseForm()}
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default Predict;
