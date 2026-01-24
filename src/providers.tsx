import React from 'react';
import { useHref, useNavigate } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ToastProvider } from '@heroui/react';
import { HeroUIProvider } from '@heroui/system';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { AuthProvider } from '@/context/AuthProvider';
import { LeagueProvider } from '@/context/LeagueContext';

const queryClient = new QueryClient();

const clientId = import.meta.env.VITE_CLIENT_ID;

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider navigate={navigate} useHref={useHref}>
            <LeagueProvider>
              <ToastProvider />
              {children}
            </LeagueProvider>
          </HeroUIProvider>
        </QueryClientProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
