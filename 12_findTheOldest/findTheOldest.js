// const findTheOldest = function(peopleArray) {
//     let numPeople = peopleArray.length;
//     let i = 0;
//     let maxAge=0;
//     let maxAgeIndex = 0;
//     let currentAge = 0;
//     for(; i<numPeople; i++){
//         if(peopleArray[i].hasOwnProperty('yearOfDeath')) {
//             currentAge = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
//         } else {
//             let currentYear = new Date().getFullYear();
//             currentAge = currentYear - peopleArray[i].yearOfBirth;
//         }
//         if(currentAge > maxAge){
//             maxAgeIndex = i;
//             maxAge = currentAge;
//         }
//     }
//     return peopleArray[maxAgeIndex];
// };

// USING ARRAY METHODS

const findTheOldest =  function(peopleArray){
    return peopleArray.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
}

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death-birth;
};

// Do not edit below this line
module.exports = findTheOldest;
