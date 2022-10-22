import { getRandomArrayOfNumbers } from 'utils/get-random-array-of-numbers';

describe('random array of numbers', () => {
  test('should get default three random numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberTo: 10 });

    expect(numbers.length).toBe(3);
  });

  test('should get 1 result in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberTo: 1, results: 1 });

    expect(numbers).toEqual([0]);
  });
  test('should get 2 results in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberTo: 2, results: 2 });

    expect(numbers.length).toBe(2);
  });
  test('should get default 3 results in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({});

    expect(numbers.length).toBe(3);
  });
  test('should get unique results in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberTo: 3, results: 3 });
    const uniqueNumbers = new Set(numbers);

    expect(numbers.length === uniqueNumbers.size).toBe(true);
  });
  test('should get duplicates in array of numbers', () => {
    const numbers = getRandomArrayOfNumbers({ numberTo: 3, results: 4 });
    const uniqueNumbers = new Set(numbers);

    expect(numbers.length === uniqueNumbers.size).toBe(false);
  });
});
