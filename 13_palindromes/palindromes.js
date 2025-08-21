const palindromes = function (string) {
let newString = string.replace(/\s/g, ''); //removes spaces
let strArray = newString.split('');
let rev = strArray.reverse();
let str2 = rev.join('');

return newString === str2;
};

// Do not edit below this line
module.exports = palindromes;
