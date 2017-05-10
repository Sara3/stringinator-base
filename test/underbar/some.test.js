const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([1,7,6], item => item % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    expect(_.some([4,2,6], item => item % 2 === 1)).toBe(false);
  });

});