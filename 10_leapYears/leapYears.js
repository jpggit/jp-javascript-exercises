const leapYears = function(year) {
    if ( year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    // if (year % 100 === 0 && year % 400 == 0) return true; (NOT NEEDED, REDUNDANT)
    // if ( year % 4 == 0) return true; (NOT NEEDED, REDUNDANT)
    return true;
};


// if !num%4 === 0 || num/100===0 = "ERROR";
// if num / 400 === 0




// Do not edit below this line
module.exports = leapYears;
