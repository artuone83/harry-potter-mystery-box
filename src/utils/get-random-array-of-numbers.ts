interface GetRandomNumbersParams {
  numberTo?: number;
  results?: number;
}

export const getRandomArrayOfNumbers = ({ numberTo = 3, results = 3 }: GetRandomNumbersParams) => {
  const numbers: number[] = [];
  let i = 0;
  const getRandomNumber = () => Math.floor(Math.random() * numberTo) + 0;

  while (i < results) {
    const randomNumber = getRandomNumber();

    if (i > 0) {
      if (randomNumber === numbers[i - 1]) {
        let newRandomNumber = getRandomNumber();
        let j = 0;

        while (j < results) {
          if (newRandomNumber === randomNumber && newRandomNumber === numbers[i - 1]) {
            newRandomNumber = getRandomNumber();
            j++;
          } else {
            break;
          }
        }

        numbers[i] = newRandomNumber;
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
