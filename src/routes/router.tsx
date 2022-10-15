import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, HomePage, MinifigsPage, Root, SummaryPage } from 'pages';

export const ROUTER_PATHS = {
  root: '/',
  minfigs: '/minifigs',
  summary: '/summary',
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTER_PATHS.minfigs,
        element: <MinifigsPage />,
      },
      {
        path: ROUTER_PATHS.summary,
        element: <SummaryPage />,
      },
    ],
  },
]);
