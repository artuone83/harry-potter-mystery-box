import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';

import { MinifigImg } from 'components/minifig-img';
import { Section } from 'layouts';
import { MinifigPartsResponseDTO, MinifigsDTO } from 'services';

interface PartsSummaryProps {
  details: MinifigsDTO;
  parts: MinifigPartsResponseDTO;
}

export const PartsSummary: FunctionComponent<PartsSummaryProps> = ({ details, parts }) => {
  const { handleSubmit } = useFormContext();

  return (
    <Section>
      <Card sx={{ margin: 0 }}>
        <Typography
          sx={{ color: '#000000', textAlign: 'left', marginBottom: 2 }}
          component="h2"
          variant="h5"
        >
          Summary
        </Typography>
        <Stack alignItems="center" mb={2}>
          <MinifigImg>
            <img
              src={details.set_img_url}
              width={164}
              height={164}
              alt={details.name}
              loading="lazy"
            />
          </MinifigImg>
          <Typography component="p" variant="subtitle2" textAlign="center" mb={4}>
            {details.name}
          </Typography>
        </Stack>
        <Box mb={20}>
          <Typography component="p" variant="subtitle2" mb={4}>
            There are {parts.count} parts in this minifig:
          </Typography>
          <Stack direction="column" spacing={2}>
            {parts.results.map(({ part: { part_img_url, name, part_num } }) => (
              <Stack key={name} direction="row" alignItems="center">
                <MinifigImg sx={{ width: '82px', height: '82px' }}>
                  <img src={part_img_url} width={82} height={82} alt={name} loading="lazy" />
                </MinifigImg>
                <Stack direction="column" justifyContent="center" width="calc(100% - 82px)" pl={4}>
                  <Typography component="p" variant="subtitle2" noWrap>
                    {name}
                  </Typography>
                  <Typography sx={{ color: '#F28C28' }} component="p" variant="subtitle2">
                    {part_num}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Stack direction="row" justifyContent="center">
          <Button
            variant="contained"
            type="submit"
            // eslint-disable-next-line no-console
            onClick={handleSubmit((formData) => console.log(formData))}
          >
            Submit
          </Button>
        </Stack>
      </Card>
    </Section>
  );
};
