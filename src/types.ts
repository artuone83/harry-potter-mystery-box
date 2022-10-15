import { ReactNode } from 'react';

export interface ReactChildren {
  children?: ReactNode | undefined;
}

export type MaybeNull<T> = T | null;
