import { httpClient } from 'lib/axios';

import { MinifigsResponseDTO } from './minifigs-dto';

const URL = {
  path: '/minifigs',
  params: {
    search: 'search',
  },
} as const;

export const getMinifigs = (search: string) =>
  httpClient
    .get<MinifigsResponseDTO>(!search ? URL.path : `${URL.path}/?${URL.params.search}=${search}`)
    .then((response) => response.data);
