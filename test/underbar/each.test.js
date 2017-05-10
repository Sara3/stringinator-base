const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
     const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      1:1,
      2:2,
      3:3
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj){
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count++;
    });
    expect(count).toBe(3);

  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj ={
      1:3,
      4:3,
      6:2
    };
    let count = 0;
    _.each(obj, function(el, index, itObj){
      expect(el).toEqual(itObj[index]);
      count++;
    });
    expect(count).toBe(3);

  });
});

