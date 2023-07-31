//www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//Input is an array of numbers
//Output is a number
//Declare new vaiable for the avg
//Loop through the array and add them up using a forEach
//Divide the sum by the length of the array
//return avg

https: function findAverage(array) {
  let sum = 0
  array.forEach((num) => (sum += num))
  if (sum === 0) {
    return 0
  } else {
    return sum / array.length
  }
}

console.log(findAverage([1, 1, 1])) //, 1
console.log(findAverage([1, 2, 3])) //, 2
console.log(findAverage([1, 2, 3, 4])) //, 2.5
