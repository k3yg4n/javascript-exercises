const findTheOldest = function(peopleArray) {
    let numPeople = peopleArray.length;
    let i = 0;
    let maxAge=0;
    let maxAgeIndex = 0;
    let currentAge = 0;
    for(; i<numPeople; i++){
        if(peopleArray[i].hasOwnProperty('yearOfDeath')) {
            currentAge = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            currentAge = currentYear - peopleArray[i].yearOfBirth;
        }
        if(currentAge > maxAge){
            maxAgeIndex = i;
            maxAge = currentAge;
        }
    }
    return peopleArray[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
