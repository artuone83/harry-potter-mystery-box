import { Button, Stack, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { RouterLink } from 'components';

import { Section } from 'layouts';

import { ROUTER_PATHS } from 'routes';

export const HEADER = 'Lego minifigs mystery box';
export const LINK_TEXT_CONTENT = `Let's go!`;

export const HomePage: FunctionComponent = () => (
  <Section>
    <Stack alignItems="center">
      <Typography component="h1" variant="h2" mb={7}>
        {HEADER}
      </Typography>
      <RouterLink to={ROUTER_PATHS.minfigs.path}>
        <Button variant="contained">{LINK_TEXT_CONTENT}</Button>
      </RouterLink>
    </Stack>
  </Section>
);
