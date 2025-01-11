const reverseString = function(input_string) {
  let result_string = "";

  for (let i = input_string.length - 1; i >= 0; i--) {
    result_string += input_string[i];
  }

  return result_string;
};

// Do not edit below this line
module.exports = reverseString;
