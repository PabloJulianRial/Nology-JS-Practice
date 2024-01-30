//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
};
//console.log(isNumberPositive(0))

//2.Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {
  return Math.floor(days / 365);
};

//console.log(convertDaysToAge(6570))

//3.Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {
  if (num1 === num2 && num1 === num3) {
    return num1;
  } else if (num1 === num2 && num2 > num3) {
    return num2;
  } else if (num2 === num3 && num2 > num1) {
    return num2;
  } else if (num1 === num3 && num1 > num2) {
    return num1;
  } else {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else if (num3 > num1 && num3 > num2) {
      return num3;
    }
  }
};

//console.log(getLargestNumber(21,7,21))

//4.Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (names) =>{
  return names[names.length - 1]
}

//console.log(getLastName(['pepe', 'adrian', 'leon']))

//5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (numbers)=>{
  const isNumberPositive = (number) => number >= 0
  return numbers.every(isNumberPositive)
}

//console.log(allNumbersPositive([1, -2, 3]));