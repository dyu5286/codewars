//https://www.codewars.com/kata/602db3215c22df000e8544f0

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

//Inputs are numbers
//Output is a boolean
//Declare a new array, arr that consists of a,b,c
//Declare a variable, numOfPositives
//Loop that checks if each element is positive or negative
//Conditional: If the number is positive, numOfPositives += 1
//Conditional: If numOfPositives === 2, return True. Otherwise, False


function twoArePositive(a, b, c) {
  let arr = [a,b,c]
  let numOfPositives = 0
  for(let i =0; i < arr.length; i++){
    if(arr[i] > 0){
        numOfPositives += 1
    }
  }
  return numOfPositives === 2
}

console.log(twoArePositive(2, 4, -3))//, true, '(2, 4, -3)')
console.log(twoArePositive(-4, 6, 8))//, true, '(-4, 6, 8)')
console.log(twoArePositive(4, -6, 9))//, true, '(4, -6, 9)')
console.log(twoArePositive(-4, 6, 0))//, false, '(4, -6, 9)')
console.log(twoArePositive(4, 6, 10))//, false, '(4, 6, 10)')
console.log(twoArePositive(-14, -3, -4))//, false, '(-14, -3, -4)')