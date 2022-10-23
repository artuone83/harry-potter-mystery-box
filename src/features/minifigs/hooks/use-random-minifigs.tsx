import { useMemo } from 'react';

import { MinifigsResponseDTO } from 'services';

import { getRandomArrayOfNumbers } from 'utils';

export const useRandomMinifigs = (data: MinifigsResponseDTO | undefined) =>
  useMemo(
    () => ({
      randomMinifigs: data?.count
        ? getRandomArrayOfNumbers({
            numberTo: data.count,
            results: data.count >= 3 ? 3 : data.count,
          })
        : [],
    }),
    [data],
  );
