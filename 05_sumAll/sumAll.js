const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    let sum = 0;

    if(num2 < num1) {
        num2 = [num1, num1=num2][0]; // Swap the values of the 2 variables
    }

    for(let i=num1;i<=num2;i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
