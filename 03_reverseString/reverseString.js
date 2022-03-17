const reverseString = function(givenString) {
    stringArray = givenString.split("");
    newString = "";
    
    for(let i=givenString.length-1; i >= 0 ; i--){
        newString += stringArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
