const findTheOldest = function(x) {
    const newArr1 = x.map(v => {
        return v.yearOfDeath == null ? {...v, yearOfDeath : new Date().getFullYear()} : v 
    });

    let result = newArr1.reduce((r, o) => (o.yearOfDeath - o.yearOfBirth) > (r.yearOfDeath - r.yearOfBirth) ? o : r);
    return result;



};

// Do not edit below this line
module.exports = findTheOldest;
