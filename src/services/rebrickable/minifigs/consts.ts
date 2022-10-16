const MINIFIGS = '/minifigs';

export const API_PATHS = {
  minifigs: {
    path: MINIFIGS,
    params: {
      search: 'search',
    },
    parts: {
      path: (setNumber: string) => `${MINIFIGS}/${setNumber}/parts`,
    },
    details: {
      path: (setNumber: string) => `${MINIFIGS}/${setNumber}`,
    },
  },
} as const;
