import { useQuery } from '@tanstack/react-query';

import { MiniFigsResponseDTO, getMiniFigs } from 'services/rebrickable';

export const useMiniFigs = (search: string) =>
  useQuery<MiniFigsResponseDTO>(['minifigs', search], () => getMiniFigs(search));
