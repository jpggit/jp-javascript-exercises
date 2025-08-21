const fibonacci = function(num) {
    num = parseInt(num, 10);
    
    let a = 0
    let b = 1
    let temp = 0

    if (num < 0) return "OOPS";
    if (num === 0 ) return a;
    if (num ===1 ) return b;

    for (let i = 2; i<=num; i++ ) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
