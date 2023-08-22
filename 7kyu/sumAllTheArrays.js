//https://www.codewars.com/kata/5594463eaf1701909c0000d4

// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

//Input is an array
//Output is a number
//loop that checks to see if the value is a number or an array
//if it is an array, use reduce to get sum of all element in the nested array 

//Loop to check if the element is a number, and add the numbers
//return sum

function arraySum(arr) {
    arr = arr.flat(Infinity)
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])) sum += arr[i]
    }
    return sum    
}



console.log(arraySum([1, 2]))//, 3);
console.log(arraySum([365, 1, 0, 'e', [2, [3,3,[4,3]]]]))//, 6);
console.log(arraySum([1, 2, [1, 2], 'e']))//, 6);