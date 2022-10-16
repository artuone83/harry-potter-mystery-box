import { ThemeProvider, createTheme } from '@mui/material';
import React, { FunctionComponent } from 'react';

import { ReactChildren } from 'types';

const HEADINGS_COMMON_STYLE = {
  color: '#D4D7DC',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  textAlign: 'center',
} as const;

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 600,
          height: 34,
          padding: '24px',
          borderRadius: '24px',
          minWidth: '180px',
        },
        sizeLarge: {
          height: 40,
          padding: '11px 20px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { background: '#ffffff' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: '#F28C28', textDecoration: 'none', fontWeight: 'bold' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { padding: '24px', margin: '16px', borderRadius: '8px' },
      },
    },
  },
  typography: {
    h1: HEADINGS_COMMON_STYLE,

    h2: HEADINGS_COMMON_STYLE,

    h3: HEADINGS_COMMON_STYLE,
    h4: HEADINGS_COMMON_STYLE,
    h5: HEADINGS_COMMON_STYLE,
    h6: HEADINGS_COMMON_STYLE,
    body1: {
      color: '#1C2434',
    },
    subtitle1: {
      fontWeight: 'bold',
    },
  },
  // palette: {
  //   primary: {
  //     main: '#D4D7DC',
  //   },
  // },
});

export const MuiThemeProvider: FunctionComponent<ReactChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
