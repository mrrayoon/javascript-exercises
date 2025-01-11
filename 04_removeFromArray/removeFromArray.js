const removeFromArray = function(array, ...target_elements) {
  const new_array = [];

  array.forEach((element) => {
    if (!target_elements.includes(element)) {
      new_array.push(element);
    }
  })

  return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
