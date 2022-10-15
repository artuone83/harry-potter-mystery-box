import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, HomePage, MinifigsPage, Root, SummaryPage } from 'pages';

export const ROUTER_PATHS = {
  root: {
    path: '/',
  },
  minfigs: {
    path: '/minifigs',
  },
  summary: {
    key: 'set_num',
    path: '/summary/:set_num',
    param: ':set_num',
    absolute_path: (setNumber: string) => `/summary/${setNumber}`,
  },
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.root.path,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTER_PATHS.minfigs.path,
        element: <MinifigsPage />,
      },
      {
        path: ROUTER_PATHS.summary.path,
        element: <SummaryPage />,
      },
    ],
  },
]);
