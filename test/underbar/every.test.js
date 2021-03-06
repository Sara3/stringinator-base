const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      expect(_.every([1,2,3])).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([1,7,3], item => item % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([1,6,3], item => item % 2 === 1)).toBe(false);
    });

  });
});