const findTheOldest = function(arr) {
    const today = new Date().getFullYear();
    const oldest = arr.sort((a, b) => {
        if(!a.yearOfDeath) {
            return (today - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
        } else if(!b.yearOfDeath) {
            return (a.yearOfDeath - a.yearOfBirth) - (today - b.yearOfBirth)
        } 
        else {
            return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
        }
    }); 
    return oldest[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
