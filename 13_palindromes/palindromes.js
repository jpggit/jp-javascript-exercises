const palindromes = function (string) {
let newString = string.replace(/\s/g, ''); //removes spaces
let strArray = newString.split(''); // splits into array of letters
let rev = strArray.reverse(); // reverses the array
let str2 = rev.join(''); //joins reversed array

return newString === str2; //checks if space-less array = reversed array
};

// Do not edit below this line
module.exports = palindromes;
