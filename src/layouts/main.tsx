import { Box } from '@mui/system';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

export const Main: FunctionComponent<ReactChildren> = ({ children }) => (
  <Box component="main" sx={MAIN_STYLE}>
    {children}
  </Box>
);

const MAIN_STYLE = {
  minHeight: '100vh',
  background: '#1C2434',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
};
