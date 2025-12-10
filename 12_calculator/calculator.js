const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  if(arr.length == 1) return arr[0];
  
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  if(arr.length == 1) return arr[0];
  
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exp) {
  return Math.pow(base, exp);
};

const factorial = function(num) {
  if(num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
