import { getRandomArrayOfNumbers } from 'utils/get-random-array-of-numbers';

describe('random array of numbers', () => {
  test('should get default three random numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberFrom: 0, numberTo: 10 });

    expect(numbers.length).toEqual(3);
  });
  test('should get empty array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberFrom: 0, numberTo: 0, results: 0 });

    expect(numbers.length).toEqual(0);
  });
  test('should get one result in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberFrom: 0, numberTo: 1, results: 1 });

    expect(numbers).toEqual([0]);
  });
  test('should get two results in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberFrom: 0, numberTo: 2, results: 2 });

    expect(numbers.length).toEqual(2);
  });
});
