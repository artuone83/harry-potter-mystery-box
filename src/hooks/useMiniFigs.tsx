import { useQuery } from '@tanstack/react-query';

import { getMiniFigs } from 'services/rebrickable/minifigs/get-minifigs';
import { MiniFigsDTO } from 'services/rebrickable/minifigs/minifigs-dto';

export const useMiniFigs = (search: string) =>
  useQuery<MiniFigsDTO[]>(['minifigs', search], () => getMiniFigs(search));
