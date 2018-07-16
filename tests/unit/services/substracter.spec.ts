import { substract } from '@/services/substracter';

describe('substracter', () => {
  test('it should works', () => {
    expect(substract(5, 2)).toEqual(3);
  });
});
