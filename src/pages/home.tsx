import { Button, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Section } from 'layouts/section';
import { ROUTER_PATHS } from 'routes';

export const HEADER = 'LEGO MINIFIGS MISTERY BOX';
export const LINK_TEXT_CONTENT = `Let's go!`;

export const Home: FunctionComponent = () => (
  <Section>
    <Typography component="h1">{HEADER}</Typography>
    <Button variant="contained">
      <Link to={ROUTER_PATHS.minfigs}>{LINK_TEXT_CONTENT}</Link>
    </Button>
  </Section>
);
