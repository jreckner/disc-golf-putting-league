import React, { createContext, useContext, useState } from 'react';

import { CredentialResponse, googleLogout } from '@react-oauth/google';

import { jwtDecode, JwtPayload } from 'jwt-decode';
import Lockr from 'lockr';
import { isNil } from 'lodash';

const AuthContext = createContext<AuthContextProvidedProps | null>(null);

export type GoogleUser = JwtPayload & {
  name?: string;
  email?: string;
  picture?: string;
};

export interface AuthContextProvidedProps {
  user: GoogleUser | null;
  // eslint-disable-next-line no-unused-vars
  login: (response: CredentialResponse) => void;
  logout: () => void;
}

/* eslint react/prop-types: 0 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(Lockr.get('google-user') || null);

  const login = (response: CredentialResponse) => {
    if (response?.credential) {
      console.log(response?.credential);
      const googleUser: GoogleUser = jwtDecode(response.credential);
      setUser(googleUser);
      Lockr.set('google-user', googleUser);
    }
  };

  const logout = () => {
    Lockr.rm('google-user');
    setUser(null);
    googleLogout();
  };

  const value: AuthContextProvidedProps = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (isNil(context)) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
