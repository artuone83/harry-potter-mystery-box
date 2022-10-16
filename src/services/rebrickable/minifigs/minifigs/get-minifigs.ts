import { API_PATHS } from '../consts';
import { httpClient } from 'lib/axios';

import { MinifigsResponseDTO } from './minifigs-dto';

const {
  minifigs: { path, params },
} = API_PATHS;

export const getMinifigs = (search: string) =>
  httpClient
    .get<MinifigsResponseDTO>(!search ? path : `${path}/?${params.search}=${search}`)
    .then((response) => response.data);
