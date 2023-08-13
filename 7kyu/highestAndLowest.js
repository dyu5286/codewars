//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//Input is a string
//Output is a string
//split numbers  by (" ")
//this returns an array of numbers
//sort the array in ascending order
//lowest is [0] and highest is [arr.length -1]
//return "max"+ " " + "min"

function highAndLow(numbers){
    let numArr = numbers.split(" ").sort((a,b) => a - b)
    let highNum = numArr[numArr.length - 1]
    let lowNum = numArr[0]
    return highNum + " " + lowNum
    
  }


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))//, "42 -9");
console.log(highAndLow("1 2 3"))//, "3 1");