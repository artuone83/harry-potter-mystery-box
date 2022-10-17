interface GetRandomNumbersParams {
  numberFrom: number;
  numberTo: number;
  results?: number;
}

// TODO: handle possible duplicates
export const getRandomArrayOfNumbers = ({
  numberFrom,
  numberTo,
  results = 3,
}: GetRandomNumbersParams) => {
  const numbers = [];
  let i = 0;

  while (i < results) {
    numbers.push(Math.floor(Math.random() * numberTo) + numberFrom);
    i++;
  }

  return numbers;
};
