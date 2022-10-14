import React from 'react';

import { Loading } from 'components/loading';
import { useMiniFigs } from 'hooks/useMiniFigs';

export const Root = () => {
  const { data: miniFigs, isLoading } = useMiniFigs('harry potter');

  return (
    <div id="container">
      {isLoading && <Loading />}
      {miniFigs && JSON.stringify(miniFigs)}
    </div>
  );
};
