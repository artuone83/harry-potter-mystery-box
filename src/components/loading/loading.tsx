import { Box, CircularProgress, SxProps, Theme } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

interface LoadingProps extends ReactChildren {
  sx?: SxProps<Theme>;
}

export const Loading: FunctionComponent<LoadingProps> = ({
  children,
  sx = {
    minWidth: 50,
    minHeight: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}) => <Box sx={sx}>{children || <CircularProgress />}</Box>;
