const sumAll = function(start_number, end_number) {
  let total_sum = 0;

  // Returns 'ERROR' for negative numbers
  if (start_number < 0 || end_number < 0) {
    return 'ERROR';
  }
  // Returns 'ERROR' for non-integer parameters and non-number parameters
  if (!Number.isInteger(start_number) || !Number.isInteger(end_number)) {
    return 'ERROR';
  }


  if (start_number <= end_number) {
    for (let i = start_number; i <= end_number; i++) {
      total_sum += i;
    }
  } else {
    for (let i = start_number; i >= end_number; i--) {
      total_sum += i;
    }
  }

  return total_sum;
};

// Do not edit below this line
module.exports = sumAll;
