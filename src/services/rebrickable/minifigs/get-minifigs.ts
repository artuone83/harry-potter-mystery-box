import { httpClient } from 'lib/axios';

import { MiniFigsResponseDTO } from './minifigs-dto';

const URL = {
  path: '/minifigs',
  params: {
    search: 'search',
  },
} as const;

export const getMiniFigs = (search: string) =>
  httpClient
    .get<MiniFigsResponseDTO>(!search ? URL.path : `${URL.path}/?${URL.params.search}=${search}`)
    .then((response) => response.data);
