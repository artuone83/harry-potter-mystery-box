import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { HEADER, Home, LINK_TEXT_CONTENT } from 'pages/home';

describe('home page', () => {
  test('renders page title and link to next page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );
    const headerElement = screen.getByText(HEADER);
    const linkElement = screen.getByText(LINK_TEXT_CONTENT);
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
