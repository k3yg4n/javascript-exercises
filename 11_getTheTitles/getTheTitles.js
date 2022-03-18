const getTheTitles = function(bookArray) {
    numBooks = bookArray.length;
    titlesArray = Array(numBooks)
    for(let i=0; i < numBooks; i++){
        titlesArray[i] = bookArray[i].title;
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
