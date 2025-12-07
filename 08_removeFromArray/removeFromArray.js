const removeFromArray = function(arr, ...args) { // multiple args
    return arr.filter(currValue => !args.includes(currValue)) // bool-based remover
};

// Do not edit below this line
module.exports = removeFromArray;
