interface AuthProviderProps {
  children: React.ReactNode;
}

import React from 'react';
import { AuthProvider } from './auth';

const AppProvider = ({ children }: AuthProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
