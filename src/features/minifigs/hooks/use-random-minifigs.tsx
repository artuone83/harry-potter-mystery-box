import { useMemo } from 'react';
import { getRandomArrayOfNumbers } from 'utils';

import { MinifigsResponseDTO } from 'services';

export const useRandomMinifigs = (data: MinifigsResponseDTO | undefined) =>
  useMemo(
    () => ({
      randomMinifigs: data?.count
        ? getRandomArrayOfNumbers({
            min: 0,
            max: data.count,
            results: data.count >= 3 ? 3 : data.count,
          })
        : [],
    }),
    [data],
  );
