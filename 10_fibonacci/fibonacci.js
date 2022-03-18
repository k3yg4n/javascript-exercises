const fibonacci = function(num) {
    let num1 = 1;
    let num2 = 1;
    let result = 1;

    if(num === 1 || num === 2){
        return 1;
    }

    if(num <= 0){
        return "OOPS";
    }

    if(typeof(num)=== 'string'){
        num = parseInt(num);
    }

    for(let i=3; i<=num; i++){
        result = num1+num2;
        num1=num2;
        num2=result;        
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
