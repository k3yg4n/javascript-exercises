// const getTheTitles = function(bookArray) {
//     numBooks = bookArray.length;
//     titlesArray = Array(numBooks)
//     for(let i=0; i < numBooks; i++){
//         titlesArray[i] = bookArray[i].title;
//     }
//     return titlesArray;
// };

// Alternatively, using array methods.

const getTheTitles = function(bookArray) {
    return bookArray.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
