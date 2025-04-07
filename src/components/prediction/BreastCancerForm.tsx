
import React, { useState } from 'react';
import { usePrediction } from '@/context/PredictionContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BreastCancerForm = () => {
  const { predictDisease, isPredicting } = usePrediction();
  
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    perimeter_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: '',
    concave_points_mean: '',
    symmetry_mean: '',
    fractal_dimension_mean: ''
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
    
    predictDisease('breast-cancer', numericInputs);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Breast Cancer Prediction</CardTitle>
        <CardDescription className="text-center">
          Enter the cellular measurements to predict breast cancer likelihood
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="radius_mean">Radius Mean</Label>
              <Input 
                id="radius_mean"
                name="radius_mean"
                type="number"
                step="0.01"
                placeholder="14.1"
                required
                value={formData.radius_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="texture_mean">Texture Mean</Label>
              <Input 
                id="texture_mean"
                name="texture_mean"
                type="number"
                step="0.01"
                placeholder="19.3"
                required
                value={formData.texture_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="perimeter_mean">Perimeter Mean</Label>
              <Input 
                id="perimeter_mean"
                name="perimeter_mean"
                type="number"
                step="0.01"
                placeholder="92.0"
                required
                value={formData.perimeter_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="area_mean">Area Mean</Label>
              <Input 
                id="area_mean"
                name="area_mean"
                type="number"
                step="0.01"
                placeholder="650.0"
                required
                value={formData.area_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smoothness_mean">Smoothness Mean</Label>
              <Input 
                id="smoothness_mean"
                name="smoothness_mean"
                type="number"
                step="0.001"
                placeholder="0.096"
                required
                value={formData.smoothness_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="compactness_mean">Compactness Mean</Label>
              <Input 
                id="compactness_mean"
                name="compactness_mean"
                type="number"
                step="0.001"
                placeholder="0.104"
                required
                value={formData.compactness_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="concavity_mean">Concavity Mean</Label>
              <Input 
                id="concavity_mean"
                name="concavity_mean"
                type="number"
                step="0.001"
                placeholder="0.088"
                required
                value={formData.concavity_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="concave_points_mean">Concave Points Mean</Label>
              <Input 
                id="concave_points_mean"
                name="concave_points_mean"
                type="number"
                step="0.001"
                placeholder="0.049"
                required
                value={formData.concave_points_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="symmetry_mean">Symmetry Mean</Label>
              <Input 
                id="symmetry_mean"
                name="symmetry_mean"
                type="number"
                step="0.001"
                placeholder="0.182"
                required
                value={formData.symmetry_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fractal_dimension_mean">Fractal Dimension Mean</Label>
              <Input 
                id="fractal_dimension_mean"
                name="fractal_dimension_mean"
                type="number"
                step="0.001"
                placeholder="0.062"
                required
                value={formData.fractal_dimension_mean}
                onChange={handleChange}
                className="input-shadow"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-2">
              * The values above represent cellular measurements from a tissue sample image
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setFormData({
            radius_mean: '14.1',
            texture_mean: '19.3',
            perimeter_mean: '92.0',
            area_mean: '650.0',
            smoothness_mean: '0.096',
            compactness_mean: '0.104',
            concavity_mean: '0.088',
            concave_points_mean: '0.049',
            symmetry_mean: '0.182',
            fractal_dimension_mean: '0.062'
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

export default BreastCancerForm;
