import { httpClient } from 'lib/axios';

import { MiniFigsDTO } from './minifigs-dto';

const URL = {
  path: '/minifigs',
  params: {
    search: 'search',
  },
} as const;

export const getMiniFigs = (search: string) =>
  httpClient
    .get<MiniFigsDTO[]>(!search ? URL.path : `${URL.path}/?${URL.params.search}=${search}`)
    .then((response) => response.data);
