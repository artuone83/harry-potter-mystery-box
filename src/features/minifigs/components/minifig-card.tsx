import { Card, Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { MinifigImg } from 'components';

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
    <Card
      sx={{
        minWidth: '30%',
        ...(selectedFigure === setNumber && { boxShadow: '0px 0px 12px 12px rgb(242, 140, 40)' }),
      }}
      onClick={() => setSelectedFigure(setNumber)}
    >
      <Stack alignItems="center">
        <MinifigImg>
          <img src={setImgUrl} width={164} height={164} alt={name} loading="lazy" />
        </MinifigImg>
        <Typography component="p" variant="subtitle2" textAlign="center" mb={2}>
          {name}
        </Typography>
        <MuiLink href={setUrl} underline="always" target="_blank" rel="noopener">
          Show details
        </MuiLink>
      </Stack>
    </Card>
  );
};
