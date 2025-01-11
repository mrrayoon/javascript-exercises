const repeatString = function(string_argument, num) {
  if (num < 0)
    return "ERROR";

  let result_string = "";

  for (let i = 0; i < num; i++ ) {
    result_string += string_argument;
  }

  return result_string;
};

// Do not edit below this line
module.exports = repeatString;
