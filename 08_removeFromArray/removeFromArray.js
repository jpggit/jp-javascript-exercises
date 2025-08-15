const removeFromArray = function(array, ...removeItems) {
    for (let i=array.length-1; i>=0; i--){
        if (removeItems.includes(array[i])){
               array.splice (i, 1);
        }
    }
return array;
};



// Do not edit below this line
module.exports = removeFromArray;
