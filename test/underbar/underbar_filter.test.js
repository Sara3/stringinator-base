const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    expect(_.filter([1,2,3,4], item => item % 2 === 1)).toEqual([1,3]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      age: 22, 
      name: "sara"
    };
    expect(_.filter(obj, item => !isNaN(item))).toEqual([22]);
  });
});