//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//Do not mutate the original arary
//Remove duplicate with lower index
//empty array return empt array

//Input is an array
//Output is an array
//First, determine the lowest rating in the array using Math.min
//Loop thru the array. Iterate thru the array with a conditional
//Conditional: if (numbers[i] === Math.min(numbers)), then  splice (i,1) that number from array
//return array


function removeSmallest(numbers) {  //[2,2,1,2,1]
  if(numbers.length === 0){
    return numbers
  }  
  let copyNumbers = [...numbers]
  let lowNumber = Math.min(...numbers)
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === Math.min(...numbers)){
        copyNumbers.splice(i,1)
        return copyNumbers
    }
  }
}

// console.log(removeSmallest([1, 2, 3, 4, 5]))//, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// console.log(removeSmallest([5, 3, 2, 1, 4]))//, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]))//, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// console.log(removeSmallest([]))//, [], "Wrong result for []");