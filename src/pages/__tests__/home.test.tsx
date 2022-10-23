import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { HEADER, HomePage, LINK_TEXT_CONTENT } from 'pages/home-page';

describe('home page', () => {
  test('renders page title and link to next page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>,
    );
    const headerElement = screen.getByText(HEADER);
    const linkElement = screen.getByText(LINK_TEXT_CONTENT);
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
