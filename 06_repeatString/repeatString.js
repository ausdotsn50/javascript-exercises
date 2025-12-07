const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    
    const new_str = [];
    for(let i = 0; i < num; i++) {
        new_str.push(string)
    }
    return new_str.join("");
};

// Do not edit below this line
module.exports = repeatString;
