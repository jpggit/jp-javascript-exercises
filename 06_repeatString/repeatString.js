const repeatString = function(str, times) {
    let string = ""; //empty string to start
    for (let i=0; i<times; i++) {
        string += str;
    }

    return string;
};

console.log(repeatString("hi", 3));


// Do not edit below this line
module.exports = repeatString;
