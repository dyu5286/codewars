//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//Input is an array
//Output is an array
//filter() to filter out the even numbers

function noOdds(values) {
  return values.filter(x => !(x % 2))
}

console.log((noOdds([0, 1])))//, [0])
console.log((noOdds([0, 1, 2, 3])))//, [0, 2])