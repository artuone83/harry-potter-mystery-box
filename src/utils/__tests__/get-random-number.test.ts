import { getRandomNumber } from 'utils/get-random-number';

describe('random number', () => {
  test('should get random number in specified range', () => {
    const number = getRandomNumber({ numberTo: 10 });

    expect(number <= 10).toBe(true);
  });
});
