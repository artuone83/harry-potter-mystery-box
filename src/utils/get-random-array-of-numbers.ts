import { getRandomNumber } from './get-random-number';

interface GetRandomNumbersParams {
  numberTo?: number;
  results?: number;
}

export const getRandomArrayOfNumbers = ({ numberTo = 3, results = 3 }: GetRandomNumbersParams) => {
  const numbers: number[] = [];
  let i = 0;

  while (i < results) {
    const randomNumber = getRandomNumber({ numberTo });

    if (i > 0) {
      if (randomNumber === numbers[i - 1]) {
        let newRandomNumber = getRandomNumber({ numberTo });
        let j = 0;

        while (j < 6) {
          if (newRandomNumber === randomNumber && newRandomNumber === numbers[i - 1]) {
            newRandomNumber = getRandomNumber({ numberTo });
            j++;
          } else {
            break;
          }
        }

        numbers.push(newRandomNumber);
      } else {
        numbers.push(randomNumber);
      }
    } else {
      numbers.push(randomNumber);
    }

    i++;
  }

  return numbers;
};
