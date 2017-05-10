const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    expect(_.reject([1,2,3,4], item => item % 2 === 1)).toEqual([2,4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      name: "bla", 
      nul: null
    }
    expect(_.reject(obj, item => item===null)).toEqual(["bla"])

  });
});