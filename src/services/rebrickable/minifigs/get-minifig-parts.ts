import { httpClient } from 'lib/axios';

import { MinifigPartsResponseDTO } from './minifigs-parts-dto';

const URL = {
  path: (setNumber: string) => `/minifigs/${setNumber}/parts`,
} as const;

export const getMinifigParts = (setNumber: string) =>
  httpClient
    .get<MinifigPartsResponseDTO>(`${URL.path(setNumber)}`)
    .then((response) => response.data);
