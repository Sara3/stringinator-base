const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([1,2,2,2,2,2])).toEqual([1,2]);
  });
});