import { useQuery } from '@tanstack/react-query';

import { MinifigsResponseDTO, getMinifigs } from 'services/rebrickable';

export const useMinifigsQuery = ({ search }: { search: string }) =>
  useQuery<MinifigsResponseDTO>(['minifigs', search], () => getMinifigs(search));
