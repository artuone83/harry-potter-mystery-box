import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, Root } from 'pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
