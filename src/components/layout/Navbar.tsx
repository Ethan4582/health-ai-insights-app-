
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-medical to-blue-400 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">HP</span>
          </div>
          <span className="text-xl font-bold text-medical">HealthPredict</span>
        </Link>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-medical">
                Dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <User size={18} />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600"
                >
                  <LogOut size={16} />
                  <span className="ml-1">Logout</span>
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
