
import React, { useState } from 'react';
import { usePrediction } from '@/context/PredictionContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const DiabetesForm = () => {
  const { predictDisease, isPredicting } = usePrediction();
  
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert values to numbers
    const numericInputs = Object.entries(formData).reduce((acc, [key, value]) => {
      acc[key] = Number(value);
      return acc;
    }, {} as Record<string, number>);
    
    predictDisease('diabetes', numericInputs);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Diabetes Prediction</CardTitle>
        <CardDescription className="text-center">
          Enter patient health metrics to predict diabetes likelihood
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pregnancies">Pregnancies</Label>
              <Input 
                id="pregnancies"
                name="pregnancies"
                type="number"
                min="0"
                placeholder="0-17"
                required
                value={formData.pregnancies}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Number of pregnancies</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="glucose">Glucose Level</Label>
              <Input 
                id="glucose"
                name="glucose"
                type="number"
                min="0"
                placeholder="70-200 mg/dL"
                required
                value={formData.glucose}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Plasma glucose concentration (mg/dL)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bloodPressure">Blood Pressure</Label>
              <Input 
                id="bloodPressure"
                name="bloodPressure"
                type="number"
                min="0"
                placeholder="40-120 mm Hg"
                required
                value={formData.bloodPressure}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Diastolic blood pressure (mm Hg)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skinThickness">Skin Thickness</Label>
              <Input 
                id="skinThickness"
                name="skinThickness"
                type="number"
                min="0"
                placeholder="0-100 mm"
                required
                value={formData.skinThickness}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Triceps skin fold thickness (mm)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="insulin">Insulin</Label>
              <Input 
                id="insulin"
                name="insulin"
                type="number"
                min="0"
                placeholder="0-850 μU/ml"
                required
                value={formData.insulin}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">2-Hour serum insulin (μU/ml)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bmi">BMI</Label>
              <Input 
                id="bmi"
                name="bmi"
                type="number"
                step="0.1"
                min="0"
                placeholder="18-40 kg/m²"
                required
                value={formData.bmi}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Body mass index (kg/m²)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</Label>
              <Input 
                id="diabetesPedigreeFunction"
                name="diabetesPedigreeFunction"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.08-2.5"
                required
                value={formData.diabetesPedigreeFunction}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Diabetes hereditary score</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age"
                name="age"
                type="number"
                min="0"
                placeholder="21-81 years"
                required
                value={formData.age}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Age in years</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setFormData({
            pregnancies: '3',
            glucose: '120',
            bloodPressure: '70',
            skinThickness: '20',
            insulin: '80',
            bmi: '25.6',
            diabetesPedigreeFunction: '0.587',
            age: '50'
          })}
        >
          Fill Sample Data
        </Button>
        
        <Button onClick={handleSubmit} disabled={isPredicting}>
          {isPredicting ? 'Processing...' : 'Predict Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiabetesForm;
