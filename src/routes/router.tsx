import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, Home, Minifigs, Root, Summary } from 'pages';

export const ROUTER_PATHS = {
  root: '/',
  minfigs: 'minifigs',
  summary: 'summary',
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTER_PATHS.minfigs,
        element: <Minifigs />,
      },
      {
        path: ROUTER_PATHS.summary,
        element: <Summary />,
      },
    ],
  },
]);
