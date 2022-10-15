interface GetRandomNumbersParams {
  min: number;
  max: number;
  results?: number;
}

// TODO: handle possible duplicates
export const getRandomArrayOfNumbers = ({ min, max, results = 3 }: GetRandomNumbersParams) => {
  const numbers = [];
  let i = 0;

  while (i < results) {
    numbers.push(Math.floor(Math.random() * max) + min);
    i++;
  }

  return numbers;
};
