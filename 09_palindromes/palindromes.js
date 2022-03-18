const palindromes = function (phrase) {
    originalPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase();
    reversedPhrase = "";
    
    for(let i=originalPhrase.length-1; i >=0 ; i--){
        reversedPhrase += originalPhrase[i];
    }
    if(reversedPhrase == originalPhrase){
        return true;
    } else {
        return false;
    }
};
// TESTING
palindromes('HELLO! I A!M KEE.GAN   ');
// Do not edit below this line
module.exports = palindromes;
