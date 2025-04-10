
// Mock API functions for testing purposes

export const predictDisease = async (disease: string, formData: Record<string, any>) => {
  // In a real app, this would call an API endpoint
  console.log(`Predicting ${disease} with data:`, formData);
  
  // Simulate API response
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock responses based on disease type
  switch (disease) {
    case 'breast-cancer':
      return {
        disease: 'breast-cancer',
        probability: Math.random() > 0.5 ? 0.75 : 0.25,
        prediction: Math.random() > 0.5 ? 'malignant' : 'benign'
      };
    case 'diabetes':
      return {
        disease: 'diabetes',
        probability: Math.random() > 0.5 ? 0.8 : 0.3,
        prediction: Math.random() > 0.5 ? 'positive' : 'negative'
      };
    case 'parkinsons':
      return {
        disease: 'parkinsons',
        probability: Math.random() > 0.5 ? 0.85 : 0.15,
        prediction: Math.random() > 0.5 ? 'positive' : 'negative'
      };
    default:
      throw new Error(`Unknown disease: ${disease}`);
  }
};
