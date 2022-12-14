import { MaybeNull } from 'types';

export interface MinifigsDTO {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface MinifigsResponseDTO {
  count: number;
  next: MaybeNull<number>;
  previous: MaybeNull<number>;
  results: MinifigsDTO[];
}
