/**
 * Authentication Context
 * Simple auth system for MVP
 *
 * Features:
 * - Login/logout functionality
 * - Session persistence
 * - Protected route support
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  companyName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, companyName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('resolverisk_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('resolverisk_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // For MVP: Simple validation
    // TODO: Replace with actual API call in production
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // For MVP: Accept any credentials and create a mock user
    // TODO: Replace with actual authentication
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      companyName: 'Demo Company',
    };

    setUser(mockUser);
    localStorage.setItem('resolverisk_user', JSON.stringify(mockUser));
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    companyName: string
  ) => {
    // For MVP: Simple validation
    if (!email || !password || !name || !companyName) {
      throw new Error('All fields are required');
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // For MVP: Create mock user
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      companyName,
    };

    setUser(mockUser);
    localStorage.setItem('resolverisk_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('resolverisk_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
