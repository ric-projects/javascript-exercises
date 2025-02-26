const convertToCelsius = function(x) {
  let result;
  result = ( ( (x - 32) * 5) / 9);
  result = result.toFixed(1);
  result = Number(result);
  return result;
};

const convertToFahrenheit = function(x) {
  let result;
  result = ( (x * 1.8) + 32);
  result = result.toFixed(1);
  result = Number(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
