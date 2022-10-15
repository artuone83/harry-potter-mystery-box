import { Button, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { MinifigCard } from './components/minifig-card';
import { useRandomMinifigs } from './hooks';
import { Loading } from 'components';
import { useMinifigsQuery } from 'hooks';
import { Section } from 'layouts';
import { ROUTER_PATHS } from 'routes';

const HEADING = 'CHOOSE YOUR MINIFIG';

export const MinifigsFeature: FunctionComponent = () => {
  const [selected, setSelected] = React.useState<number | null>(null);

  const { data, isLoading } = useMinifigsQuery({ search: 'harry potter' });
  const { randomMinifigs } = useRandomMinifigs(data);

  return (
    <Section>
      <Typography component="h1">{HEADING}</Typography>
      {isLoading && <Loading />}
      {data &&
        randomMinifigs.map((idxNumber) => {
          const { results } = data;
          const figure = { ...results[idxNumber], customId: idxNumber };

          return (
            <MinifigCard
              key={idxNumber}
              selected={selected}
              setSelected={setSelected}
              {...figure}
            />
          );
        })}
      <Button disabled={!selected} variant="contained">
        <Link to={ROUTER_PATHS.summary}>Process to shipment</Link>
      </Button>
    </Section>
  );
};
