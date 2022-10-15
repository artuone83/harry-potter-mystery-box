import { Box, SxProps } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

export const Section: FunctionComponent<ReactChildren & { sx?: SxProps }> = ({ children, sx }) => (
  <Box component="section" sx={sx}>
    {children}
  </Box>
);
