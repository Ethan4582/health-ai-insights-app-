
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoginForm from '@/components/auth/LoginForm';
import MainLayout from '@/components/layout/MainLayout';

const Login = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <MainLayout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
