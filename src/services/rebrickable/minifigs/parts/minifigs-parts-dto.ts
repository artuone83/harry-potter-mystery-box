import { MinifigsResponseDTO } from '../minifigs/minifigs-dto';

interface MinifigPartsDTO {
  part: { part_num: number; name: string; part_img_url: string };
}
export type MinifigPartsResponseDTO = Omit<MinifigsResponseDTO, 'results'> & {
  results: MinifigPartsDTO[];
};
