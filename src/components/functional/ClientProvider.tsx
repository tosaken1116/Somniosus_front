'use client';

import type { FC, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TooltipProvider } from '../ui/Tooltip';

const client = new QueryClient();
export const ClientProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={client}>
    <TooltipProvider>{children}</TooltipProvider>
  </QueryClientProvider>
);
