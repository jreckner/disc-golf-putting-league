import React from 'react';
import { useHref, useNavigate } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ToastProvider } from '@heroui/react';
import { HeroUIProvider } from '@heroui/system';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
