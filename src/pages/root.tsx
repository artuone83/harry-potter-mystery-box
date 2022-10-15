import React from 'react';
import { Outlet } from 'react-router-dom';

import { Main } from 'layouts/main';

export const Root = () => (
  <Main>
    <Outlet />
  </Main>
);
