const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; //check if numbers are integers
    if (min < 0 || max < 0) return "ERROR";//check if numbers are positive
    if (min > max){         //switcheroo of values of min > max
        const hold = min;
        min = max;
        max = hold;
    }

    let addition = 0;
 
    for (let i = min; i<=max; i++ ) {
        addition += i;
    }

     return addition;
}



// Do not edit below this line
module.exports = sumAll;
