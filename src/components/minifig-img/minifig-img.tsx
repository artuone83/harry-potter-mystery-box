import { ImageList, ImageListItem, SxProps } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

export const MinifigImg: FunctionComponent<ReactChildren & { sx?: SxProps }> = ({
  children,
  sx = { width: 164, height: 164 },
}) => (
  <ImageList sx={sx} cols={1}>
    <ImageListItem>{children}</ImageListItem>
  </ImageList>
);
