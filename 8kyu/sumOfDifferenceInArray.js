//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    let differences = []
    arr = arr.sort((a,b) => b - a)
    for(let i = 0; i < arr.length - 1; i++){
        differences.push(arr[i] - arr[i + 1])
    }
    return differences.reduce((a,b) => a + b, 0)
}

console.log(sumOfDifferences([1, 2, 10]))//, 9);
console.log(sumOfDifferences([-3, -2, -1]))//, 2);