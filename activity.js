function _throw(m) { throw m; }

stringLength = (str) => {
   const strLength = str.length;
   return (strLength > 0 && strLength <= 10) ? strLength : _throw('String length must be between 1-10');
}

reverseString = (str) => {
   return isString(str) ? str.split('').reverse().join('') : _throw('Not a string');
}

capitalize = (str) => {
   return isString(str) ? str.split('')[0].toUpperCase() + str.slice(1) : _throw('Not a string');
}

isString = (str) => {
   return typeof str === 'string'
}
