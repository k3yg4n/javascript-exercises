const caesar = function(message, shiftVal) {
    let encrypted = ''

    //console.log('Z'.charCodeAt(0));

    for(let i = 0; i < message.length; i++){
        let currentChar = message[i];
        if(currentChar === " " || currentChar === "." || currentChar === "," || currentChar === ":" || currentChar === "!" || currentChar === "?") {
            encrypted += currentChar;
        } else { 
            // Simplify shift value to be a value greater than 0, less than 26
            while(shiftVal < 0){
                shiftVal += 26;
            }

            while(shiftVal > 26)
            {
                shiftVal -= 26;
            }

            // Constants and Variable declaration
            const firstCapital = 'A'.charCodeAt(0);
            const finalCapital = 'Z'.charCodeAt(0);
            const firstLowercase = 'a'.charCodeAt(0);
            const finalLowercase = 'z'.charCodeAt(0);
            let unicodeValue = message.charCodeAt(i);
            let shiftedUnicodeValue = message.charCodeAt(i) + shiftVal;

            if( (isLowercase(unicodeValue)) && (shiftedUnicodeValue > finalLowercase) || (isLowercase(unicodeValue) == false && (shiftedUnicodeValue > finalCapital)) ) {
            // If it shifts after 'z' or 'Z'
                shiftedUnicodeValue -= 26;
            } else if ( (isLowercase(unicodeValue) && (shiftedUnicodeValue < firstLowercase)) || (isLowercase(unicodeValue == true) && (shiftedUnicodeValue < firstCapital)) ) {
            // If it shifts before 'a' or 'A'
                shiftedUnicodeValue += 26;
            } 
            
            encrypted += String.fromCharCode(shiftedUnicodeValue);  // Otherwise, the result is within bounds
            
        }
    }
    return encrypted;
};

function isLowercase(unicodeValue){
    if(unicodeValue >= 'a'.charCodeAt(0) && unicodeValue <= 'z'.charCodeAt(0)){
        return true;
    } 
    return false;
}



// Do not edit below this line
module.exports = caesar;
