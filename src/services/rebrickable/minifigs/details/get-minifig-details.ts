import { API_PATHS } from '../consts';
import { httpClient } from 'lib/axios';

import { MinifigsDTO } from '../minifigs';

const {
  minifigs: { details },
} = API_PATHS;

export const getMinifigDetails = (setNumber: string) =>
  httpClient.get<MinifigsDTO>(details.path(setNumber)).then((response) => response.data);
