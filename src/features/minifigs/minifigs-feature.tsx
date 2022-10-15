import { Button, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { MinifigCard } from './components/minifig-card';
import { useRandomMinifigs } from './hooks';
import { Loading } from 'components';
import { useMinifigsQuery } from 'hooks';
import { Section } from 'layouts';
import { ROUTER_PATHS } from 'routes';
import { MaybeNull } from 'types';

const HEADING = 'CHOOSE YOUR MINIFIG';

export const MinifigsFeature: FunctionComponent = () => {
  const [selectedFigure, setSelectedFigure] = React.useState<MaybeNull<string>>(null);

  const { data, isLoading } = useMinifigsQuery({ search: 'harry potter' });
  const { randomMinifigs } = useRandomMinifigs(data);

  return (
    <Section>
      <Typography component="h1">{HEADING}</Typography>
      {isLoading && <Loading />}
      {data &&
        randomMinifigs.map((idxNumber) => {
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
      <Button disabled={!selectedFigure} variant="contained">
        <Link to={`${ROUTER_PATHS.summary.absolute_path(`${selectedFigure}`)}`}>
          Process to shipment
        </Link>
      </Button>
    </Section>
  );
};
