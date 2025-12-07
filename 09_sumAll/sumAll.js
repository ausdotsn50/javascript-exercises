const sumAll = function(range1, range2) {
    //console.log(typeof range1 !== 'number');
    if(range1 < 0 || range2 < 0 || !Number.isInteger(range1) || !Number.isInteger(range2)) {
        return "ERROR";
    }

    if(range1 > range2) {
        let temp = range1;
        range1 = range2;
        range2 = temp;
    }

    let sum = 0;
    for(let i = range1; i <= range2; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
