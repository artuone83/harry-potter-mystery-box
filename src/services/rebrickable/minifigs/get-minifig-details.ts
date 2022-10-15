import { httpClient } from 'lib/axios';

import { MinifigsDTO } from './minifigs-dto';

const URL = {
  path: '/minifigs',
} as const;

export const getMinifigDetails = (setNumber: string) =>
  httpClient.get<MinifigsDTO>(`${URL.path}/${setNumber}`).then((response) => response.data);
