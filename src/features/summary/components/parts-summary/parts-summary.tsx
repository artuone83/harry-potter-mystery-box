import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

import { Loading } from 'components';
import { useSummaryParams } from 'features/summary/hooks';
import { useMinifigDetailsQuery, useMinifigPartsQuery } from 'hooks';
import { Section } from 'layouts';

export const PartsSummary = () => {
  const { set_num } = useSummaryParams();
  const { data: details, isLoading: areDetailsLoading } = useMinifigDetailsQuery(set_num as string);
  const { data: parts, isLoading: arePartsLoading } = useMinifigPartsQuery(set_num as string);

  const allDataLoaded = parts && details;

  return (
    <Section sx={{ border: '6px solid lightSalmon' }}>
      {(areDetailsLoading || arePartsLoading) && <Loading />}
      {allDataLoaded && (
        <>
          <Typography component="h2" sx={{ marginBottom: 5, border: '12px solid lightGreen' }}>
            SUMMARY
          </Typography>

          <Box sx={{ marginBottom: 5, border: '12px solid lightGreen' }}>
            <Typography>{details.set_img_url}</Typography>
            <Typography>{details.name}</Typography>
          </Box>

          <Box sx={{ border: '12px solid lightBlue' }}>
            <Typography component="h3">There are {parts.count} parts in this minifig:</Typography>
            <Stack direction="column" spacing={2}>
              {parts.results.map(({ part: { part_img_url, name, part_num } }) => (
                <Stack key={name} direction="row" spacing={3} alignItems="center">
                  <p>{part_img_url}</p>
                  <Stack direction="column" spacing={4} justifyContent="center">
                    <Typography>{name}</Typography>
                    <Typography sx={{ color: 'orange' }}>{part_num}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Button variant="contained">Submit</Button>
        </>
      )}
    </Section>
  );
};
