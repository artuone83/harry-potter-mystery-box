import { Box } from '@mui/material';
import React from 'react';
import { getRandomArrayOfNumbers } from 'utils';

import { Loading } from 'components';
import { useMinifigs } from 'hooks';
import { Section } from 'layouts';

export const MinifigsFeature = () => {
  const { data, isLoading } = useMinifigs('harry potter');
  let miniFigsIndexes: number[] = [];

  if (data?.count) {
    miniFigsIndexes = getRandomArrayOfNumbers({
      min: 0,
      max: data.count,
      results: data.count >= 3 ? 3 : data.count,
    });
  }
  return (
    <Section>
      {isLoading && <Loading />}
      {miniFigsIndexes.map((idxNumber) => (
        <Box key={idxNumber}>{data?.results[idxNumber].name}</Box>
      ))}
    </Section>
  );
};
