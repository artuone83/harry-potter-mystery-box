import { useQuery } from '@tanstack/react-query';

import { MinifigsDTO } from 'services/rebrickable';
import { getMinifigDetails } from 'services/rebrickable/minifigs/get-minifig-details';

export const useMinifigDetailsQuery = (setNumber: string) =>
  useQuery<MinifigsDTO>(['minifig', setNumber], () => getMinifigDetails(setNumber));
