
import React, { useState } from 'react';
import { usePrediction } from '@/context/PredictionContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ParkinsonsForm = () => {
  const { predictDisease, isPredicting } = usePrediction();
  
  const [formData, setFormData] = useState({
    mdvp_fo: '',
    mdvp_fhi: '',
    mdvp_flo: '',
    mdvp_jitter_percent: '',
    mdvp_jitter_abs: '',
    mdvp_rap: '',
    mdvp_ppq: '',
    jitter_ddp: '',
    mdvp_shimmer: '',
    mdvp_shimmer_db: '',
    shimmer_apq3: '',
    shimmer_apq5: '',
    mdvp_apq: '',
    shimmer_dda: '',
    nhr: '',
    hnr: '',
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
    
    predictDisease('parkinsons', numericInputs);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Parkinson's Disease Prediction</CardTitle>
        <CardDescription className="text-center">
          Enter voice recording measurements to predict Parkinson's disease likelihood
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mdvp_fo">MDVP:Fo(Hz)</Label>
              <Input 
                id="mdvp_fo"
                name="mdvp_fo"
                type="number"
                step="0.001"
                placeholder="150-200 Hz"
                required
                value={formData.mdvp_fo}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Average vocal frequency</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_fhi">MDVP:Fhi(Hz)</Label>
              <Input 
                id="mdvp_fhi"
                name="mdvp_fhi"
                type="number"
                step="0.001"
                placeholder="200-300 Hz"
                required
                value={formData.mdvp_fhi}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Maximum vocal frequency</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_flo">MDVP:Flo(Hz)</Label>
              <Input 
                id="mdvp_flo"
                name="mdvp_flo"
                type="number"
                step="0.001"
                placeholder="100-150 Hz"
                required
                value={formData.mdvp_flo}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Minimum vocal frequency</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_jitter_percent">MDVP:Jitter(%)</Label>
              <Input 
                id="mdvp_jitter_percent"
                name="mdvp_jitter_percent"
                type="number"
                step="0.0001"
                placeholder="0-1%"
                required
                value={formData.mdvp_jitter_percent}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Variation in frequency</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_jitter_abs">MDVP:Jitter(Abs)</Label>
              <Input 
                id="mdvp_jitter_abs"
                name="mdvp_jitter_abs"
                type="number"
                step="0.00001"
                placeholder="0-0.001"
                required
                value={formData.mdvp_jitter_abs}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Absolute jitter in microseconds</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_rap">MDVP:RAP</Label>
              <Input 
                id="mdvp_rap"
                name="mdvp_rap"
                type="number"
                step="0.0001"
                placeholder="0-0.05"
                required
                value={formData.mdvp_rap}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Relative amplitude perturbation</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_ppq">MDVP:PPQ</Label>
              <Input 
                id="mdvp_ppq"
                name="mdvp_ppq"
                type="number"
                step="0.0001"
                placeholder="0-0.05"
                required
                value={formData.mdvp_ppq}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Five-point period perturbation quotient</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jitter_ddp">Jitter:DDP</Label>
              <Input 
                id="jitter_ddp"
                name="jitter_ddp"
                type="number"
                step="0.0001"
                placeholder="0-0.05"
                required
                value={formData.jitter_ddp}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Average difference of differences between cycles</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_shimmer">MDVP:Shimmer</Label>
              <Input 
                id="mdvp_shimmer"
                name="mdvp_shimmer"
                type="number"
                step="0.0001"
                placeholder="0-0.2"
                required
                value={formData.mdvp_shimmer}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Variation in amplitude</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_shimmer_db">MDVP:Shimmer(dB)</Label>
              <Input 
                id="mdvp_shimmer_db"
                name="mdvp_shimmer_db"
                type="number"
                step="0.01"
                placeholder="0-2"
                required
                value={formData.mdvp_shimmer_db}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Shimmer in decibels</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shimmer_apq3">Shimmer:APQ3</Label>
              <Input 
                id="shimmer_apq3"
                name="shimmer_apq3"
                type="number"
                step="0.0001"
                placeholder="0-0.05"
                required
                value={formData.shimmer_apq3}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Three-point amplitude perturbation quotient</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shimmer_apq5">Shimmer:APQ5</Label>
              <Input 
                id="shimmer_apq5"
                name="shimmer_apq5"
                type="number"
                step="0.0001"
                placeholder="0-0.1"
                required
                value={formData.shimmer_apq5}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Five-point amplitude perturbation quotient</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mdvp_apq">MDVP:APQ</Label>
              <Input 
                id="mdvp_apq"
                name="mdvp_apq"
                type="number"
                step="0.0001"
                placeholder="0-0.15"
                required
                value={formData.mdvp_apq}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Amplitude perturbation quotient</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shimmer_dda">Shimmer:DDA</Label>
              <Input 
                id="shimmer_dda"
                name="shimmer_dda"
                type="number"
                step="0.0001"
                placeholder="0-0.15"
                required
                value={formData.shimmer_dda}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Average amplitude differences between consecutive periods</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nhr">NHR</Label>
              <Input 
                id="nhr"
                name="nhr"
                type="number"
                step="0.0001"
                placeholder="0-0.5"
                required
                value={formData.nhr}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Noise to harmonic ratio</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hnr">HNR</Label>
              <Input 
                id="hnr"
                name="hnr"
                type="number"
                step="0.01"
                placeholder="0-30 dB"
                required
                value={formData.hnr}
                onChange={handleChange}
                className="input-shadow"
              />
              <p className="text-xs text-muted-foreground">Harmonics to noise ratio</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setFormData({
            mdvp_fo: '154.229',
            mdvp_fhi: '197.105',
            mdvp_flo: '116.325',
            mdvp_jitter_percent: '0.00662',
            mdvp_jitter_abs: '0.00004',
            mdvp_rap: '0.00401',
            mdvp_ppq: '0.00372',
            jitter_ddp: '0.01204',
            mdvp_shimmer: '0.04374',
            mdvp_shimmer_db: '0.426',
            shimmer_apq3: '0.02182',
            shimmer_apq5: '0.02555',
            mdvp_apq: '0.03134',
            shimmer_dda: '0.06545',
            nhr: '0.01395',
            hnr: '21.64',
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

export default ParkinsonsForm;
