import { Box, ImageList, ImageListItem, Link as MuiLink, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { MaybeNull } from 'types';

export interface MinifigCardProps {
  name: string;
  selectedFigure: MaybeNull<string>;
  setImgUrl: string;
  setNumber: string;
  setSelectedFigure: (value: React.SetStateAction<MaybeNull<string>>) => void;
  setUrl: string;
}

export const MinifigCard: FunctionComponent<MinifigCardProps> = (props) => {
  const { setNumber, name, setImgUrl, setUrl, selectedFigure, setSelectedFigure } = props;

  return (
    <Box
      sx={{
        border: `2px solid ${selectedFigure === setNumber ? 'hotPink' : 'black'}`,
        padding: 1,
        margin: 2,
      }}
      onClick={() => setSelectedFigure(setNumber)}
    >
      <ImageList sx={{ width: 164, height: 164 }} cols={1}>
        <ImageListItem>
          <img src={setImgUrl} width={164} height={164} alt="name" loading="lazy" />
        </ImageListItem>
      </ImageList>
      <Typography variant="body2">{name}</Typography>
      <MuiLink href={setUrl} underline="always" target="_blank" rel="noopener">
        Show details
      </MuiLink>
    </Box>
  );
};
