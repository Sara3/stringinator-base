const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([2,3,4,5])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    expect(_.isArrayLike({length: 5})).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    expect(_.isArrayLike({age: 5})).toBe(false);
  });
});
