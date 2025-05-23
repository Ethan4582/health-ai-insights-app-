import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage for now)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

 
  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Remove this strict check:
      // if (email === 'user@example.com' && password === 'password') {
  
      const newUser = { id: '1', name: 'Test User', email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success('Successfully logged in');
  
      // } else {
      //   toast.error('Invalid credentials');
      //   throw new Error('Invalid credentials');
      // }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const loginWithGoogle = async () => {
    setLoading(true);
    
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const googleUser = { id: '2', name: 'Google User', email: 'google@example.com' };
      setUser(googleUser);
      localStorage.setItem('user', JSON.stringify(googleUser));
      toast.success('Successfully logged in with Google');
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Failed to login with Google');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = { id: '3', name, email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success('Account created successfully');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to create account');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      loading, 
      login, 
      loginWithGoogle,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};
