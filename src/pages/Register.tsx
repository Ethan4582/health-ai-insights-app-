
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import RegisterForm from '@/components/auth/RegisterForm';
import MainLayout from '@/components/layout/MainLayout';

const Register = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <MainLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
