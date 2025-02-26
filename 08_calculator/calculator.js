const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(nums) {
  let result = 0;
  nums.forEach(myFunc);

  function myFunc(num){
    result += (Number(num));
  };
  return result;
};

const multiply = function(nums) {
  let result = 1;
  nums.forEach(myFunc);
  function myFunc(num){
    result *= num;
  };
  return result;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(x) {
  if(x == 0) {return 1};
  for(let i = x-1; i>= 1; i--){
    x = x * i;
  }
	return x;
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
