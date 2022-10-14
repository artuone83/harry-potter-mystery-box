import React from 'react';

import { render, screen } from '@testing-library/react';
import { START_TEXT } from 'consts/index';
import { Root } from 'pages/root';

test('renders learn react link', () => {
  render(<Root />);
  const linkElement = screen.getByText(START_TEXT);
  expect(linkElement).toBeInTheDocument();
});
