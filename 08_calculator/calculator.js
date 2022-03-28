const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

// const sum = function(myArray) {
//   let sumValue = 0;
// 	for(let i=0; i<myArray.length; i++){
//     sumValue += myArray[i]
//   }
//   return sumValue;
// };

// const multiply = function(values) {
//   let product=1;
//   for(let i=0; i<values.length; i++){
//     product *= values[i];
//   }
//   return product;
// };

const power = function(num, exponent) {
  let result = num;
	for(let i = 1; i < exponent; i++){
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for(let i=num; i>0; i--){
      result *= i;
  }
    return result;
};

// Array Method Versions

const sum = function(myArray){
  return myArray.reduce((runningTotal,number) => runningTotal + number , 0);
}

const multiply = function(myArray){
  return myArray.reduce((runningProd,number)=> runningProd * number, 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
