import { Box, Button, ImageList, ImageListItem, Link as MuiLink, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { MaybeNull } from 'types';

interface MinifigCardProps {
  customId: number;
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
  selected: MaybeNull<number>;
  setSelected: (value: React.SetStateAction<MaybeNull<number>>) => void;
}

export const MinifigCard: FunctionComponent<MinifigCardProps> = (props) => {
  const {
    customId,
    set_num,
    name,
    num_parts,
    set_img_url,
    set_url,
    last_modified_dt,
    selected,
    setSelected,
  } = props;

  return (
    <Box
      sx={{
        border: `2px solid ${selected === customId ? 'hotPink' : 'black'}`,
        padding: 1,
        margin: 2,
      }}
      onClick={() => setSelected(customId)}
    >
      <ImageList sx={{ width: 164, height: 164 }} cols={1}>
        <ImageListItem>
          <img src={set_img_url} width={164} height={164} alt="name" loading="lazy" />
        </ImageListItem>
      </ImageList>
      <Typography variant="body2">{name}</Typography>
      <MuiLink href={set_url} underline="always" target="_blank" rel="noopener">
        Show details
      </MuiLink>
    </Box>
  );
};
