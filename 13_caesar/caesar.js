const caesar = function(message, shiftVal) {
    let encrypted = ''

    //console.log('Z'.charCodeAt(0));

    for(let i = 0; i < message.length; i++){
        let currentChar = message[i];
        if(currentChar === " " || currentChar === "." || currentChar === "," || currentChar === ":" || currentChar === "!" || currentChar === "?") {
            encrypted += currentChar;
        } else { 
            const firstCapital = 'A'.charCodeAt(0);
            const finalCapital = 'Z'.charCodeAt(0);
            const firstLowercase = 'a'.charCodeAt(0);
            const finalLowercase = 'z'.charCodeAt(0);
            let unicodeValue = message.charCodeAt(i);
            let shiftedUnicodeValue = message.charCodeAt(i);

            if((unicodeValue >= firstLowercase && unicodeValue <= finalLowercase) && (shiftedUnicodeValue > finalLowercase)) { // If is originally between 'a' and 'z' and goes past 'z'

            } else if ((unicodeValue >= firstLowercase && unicodeValue <= finalLowercase) && (shiftedUnicodeValue < firstLowercase)) { // If originally between 'a' and 'z' and goes past 'a'

            } else if ((unicodeValue >= firstCapital && unicodeValue <= finalCapital) && (shiftedUnicodeValue > finalCapital)) { // If originally between 'A' and 'Z' and goes past 'Z'

            } else if ((unicodeValue >= firstCapital && unicodeValue <= finalCapital) && (shiftedUnicodeValue < firstCapital)) { // If originally between 'A' and 'Z' and goes past 'A'

            } else {
                encrypted += String.fromCharCode((unicodeValue + shiftVal));  // Otherwise, the result is within bounds
            }
        }
        //console.log(encrypted);
    }
    return encrypted;
};


caesar('Hello World!',5);


// Do not edit below this line
module.exports = caesar;
