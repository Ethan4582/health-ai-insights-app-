
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Early Detection Saves Lives with AI
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Our advanced AI models analyze health data to predict the likelihood of serious diseases before symptoms appear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button className="px-8 py-6 text-lg font-medium">Get Started</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="px-8 py-6 text-lg font-medium">Create Account</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="https://via.placeholder.com/600x400?text=AI+Health+Prediction" 
                alt="AI Health Prediction" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Diseases We Can Predict</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow card-hover">
              <div className="text-5xl mb-4 text-center">👩‍⚕️</div>
              <h3 className="text-xl font-bold mb-2 text-center">Breast Cancer</h3>
              <p className="text-gray-600 text-center">
                Early detection of breast cancer significantly increases treatment success rates.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow card-hover">
              <div className="text-5xl mb-4 text-center">🩸</div>
              <h3 className="text-xl font-bold mb-2 text-center">Diabetes</h3>
              <p className="text-gray-600 text-center">
                Predict diabetes risk based on various health indicators and lifestyle factors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow card-hover">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-center">Parkinson's Disease</h3>
              <p className="text-gray-600 text-center">
                Detect early signs of Parkinson's through advanced voice pattern analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-center">Create Account</h3>
              <p className="text-gray-600 text-center">
                Sign up with email or Google in just a few seconds
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-center">Select Disease</h3>
              <p className="text-gray-600 text-center">
                Choose which condition you want to predict
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-center">Enter Data</h3>
              <p className="text-gray-600 text-center">
                Provide relevant health metrics and indicators
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-medical rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 text-center">Get Results</h3>
              <p className="text-gray-600 text-center">
                Receive instant AI-powered prediction results
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-medical text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey to early detection and prevention today with HealthPredict's AI-powered disease prediction platform.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="px-8 py-6 text-lg font-medium text-medical">
              Get Started For Free
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
