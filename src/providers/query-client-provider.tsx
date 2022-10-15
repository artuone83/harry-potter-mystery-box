import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { FunctionComponent } from 'react';

import { STATUS_CODES } from 'services';
import { ReactChildren } from 'types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (String(STATUS_CODES.NOT_FOUND) === (error as Error).message) {
          return false;
        }

        return failureCount < 3;
      },
    },
  },
});

export const AppQueryProvider: FunctionComponent<ReactChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);
