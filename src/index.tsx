import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { MuiThemeProvider } from 'providers';
import { AppQueryProvider } from 'providers/query-client-provider';
import { router } from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppQueryProvider>
      <MuiThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </AppQueryProvider>
  </React.StrictMode>,
);
