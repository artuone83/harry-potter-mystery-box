import { useQuery } from '@tanstack/react-query';

import { MiniFigsDTO, getMiniFigs } from 'services/rebrickable';

export const useMiniFigs = (search: string) =>
  useQuery<MiniFigsDTO[]>(['minifigs', search], () => getMiniFigs(search));
