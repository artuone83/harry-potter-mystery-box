import React from 'react';

import { PartsSummary, ShippingDetails } from './components';
import { Section } from 'layouts';

export const SummaryFeature = () => (
  <Section>
    <ShippingDetails />
    <PartsSummary />
  </Section>
);
