const removeFromArray = function(myArray,...moreArgs) {
    numAdditionalArgs = moreArgs.length;

    for(let i=0; i < myArray.length; i++){
        for(let j=0; j < numAdditionalArgs; j++){
            //console.log("BEFORE:" + myArray);
            if(myArray[i] === moreArgs[j]){
                myArray.splice(i,1);
                i--; // We need to decrement i, since we are decreasing the number of entries by 1.
            } else {
                continue;
            }
            //console.log("AFTER:" + myArray);
        }
    }

    return myArray;

};

// removeFromArray([1,2,3,4],3,2);

// Do not edit below this line
module.exports = removeFromArray;
