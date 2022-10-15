import { useQuery } from '@tanstack/react-query';

import { MinifigPartsResponseDTO, getMinifigParts } from 'services/rebrickable';

export const useMinifigPartsQuery = (setNumber: string) =>
  useQuery<MinifigPartsResponseDTO>(['parts', setNumber], () => getMinifigParts(setNumber));
