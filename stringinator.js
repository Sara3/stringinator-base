const _ = require('./underbar');

const first = function(str, n) {
  return n === undefined ? str[0] : str.slice(0 , n);
};

const last = function(str, n) {
  return n === undefined ? str[str.length-1] : str.slice(Math.max(0, str.length-n));
};

const removeChar = function(str, target) {
  //hint: use _.reject
  return _.reject(str, (item) => {
    return item === target;
  }).join('');

};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, (item) => {
    return item === target;
  });
};

const isOnlyDigits = function(str) {
  return _.every(str, (target) => {
    isNaN(target);
  });
};

const filterToOnlyDigits = function(str) {
  return _.filer(str, item => !isNaN(item));
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  const result = [];
  _.each(obj, (item) => {
    result.push(truncateString(item, maxLength));
  });
  return result;
};

const countChars = function(str) {
  const res = {};
  for(let i = 0; i < str.length; i++){
    if(!res[str[i]]){
      res[str[i]] = 1;
    } else {
      res[str[i]] = res[str[i]] + 1;
    }
  }
  return res;
};

const dedup = function(str) {
 return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};