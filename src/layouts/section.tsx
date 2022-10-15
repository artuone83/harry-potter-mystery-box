import { Box } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

export const Section: FunctionComponent<ReactChildren> = ({ children }) => (
  <Box component="section">{children}</Box>
);
