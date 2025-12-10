const palindromes = function (str) {
    // Convert the string to an array
    const arr = [...str];
    const filtered = arr.filter((char) => !((/[!" #$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/).test(char)));
    //
    const lowerFilt = filtered.map((char) => char.toLowerCase());
    console.log(lowerFilt);
    

    // Loop into array ignoring punctuation
    for(let i = 0; i < lowerFilt.length; i++) {
        if(lowerFilt[0] !== lowerFilt[lowerFilt.length - 1]) {
            return false;
        } else {
            lowerFilt.splice(0, 1);
            lowerFilt.splice(lowerFilt.length - 1, 1);
            continue;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
