//https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases

function solve(arr) {
  let outputArr = []
  for(let i = arr.length - 1; i >= 0 ; i--){
    if(!outputArr.includes(arr[i])){
        outputArr.unshift(arr[i])
    }
  }
  return outputArr
}

console.log(solve([3,4,4,3,6,3]))//,[4,6,3]);
console.log(solve([1,2,1,2,1,2,3]))//,[1,2,3]);
console.log(solve([1,2,3,4]))//,[1,2,3,4]);
console.log(solve([1,1,4,5,1,2,1]))//,[4,5,2,1]);
console.log(solve([1,2,1,2,1,1,3]))//,[2,1,3]);