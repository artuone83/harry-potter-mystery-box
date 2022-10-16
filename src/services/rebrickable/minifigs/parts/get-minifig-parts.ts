import { API_PATHS } from '../consts';
import { httpClient } from 'lib/axios';

import { MinifigPartsResponseDTO } from './minifigs-parts-dto';

const {
  minifigs: { parts },
} = API_PATHS;

export const getMinifigParts = (setNumber: string) =>
  httpClient
    .get<MinifigPartsResponseDTO>(`${parts.path(setNumber)}`)
    .then((response) => response.data);
