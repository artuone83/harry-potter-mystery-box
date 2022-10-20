import { Button, Stack, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { MinifigCard } from './components/minifig-card';
import { useRandomMinifigs } from './hooks';
import { Loading } from 'components';
import { RouterLink } from 'components/router-link';
import { useMinifigsQuery } from 'hooks';
import { Section } from 'layouts';
import { ROUTER_PATHS } from 'routes';
import { MaybeNull } from 'types';

const HEADING = 'Choose your minifig';
const LINK_TEXT = 'Process to shipment';

export const MinifigsFeature: FunctionComponent = () => {
  const [selectedFigure, setSelectedFigure] = React.useState<MaybeNull<string>>(null);

  const { data, isLoading } = useMinifigsQuery({ search: 'harry potter' });
  const { randomMinifigs } = useRandomMinifigs(data);

  return (
    <Section>
      <Typography component="h1" variant="h2" mb={8}>
        {HEADING}
      </Typography>
      {isLoading && <Loading />}
      {data && (
        <Stack direction={{ xs: 'column', md: 'row' }} mb={8}>
          {randomMinifigs.map((idxNumber) => {
            const { results } = data;
            const { set_num, name, set_img_url, set_url } = results[idxNumber];

            return (
              <MinifigCard
                key={idxNumber}
                name={name}
                selectedFigure={selectedFigure}
                setImgUrl={set_img_url}
                setNumber={set_num}
                setSelectedFigure={setSelectedFigure}
                setUrl={set_url}
              />
            );
          })}
        </Stack>
      )}
      <Stack alignItems="center">
        <RouterLink
          to={`${ROUTER_PATHS.summary.absolute_path(`${selectedFigure}`)}`}
          style={{ ...(!selectedFigure && { pointerEvents: 'none' }) }}
        >
          <Button disabled={!selectedFigure} variant="contained">
            {LINK_TEXT}
          </Button>
        </RouterLink>
      </Stack>
    </Section>
  );
};
