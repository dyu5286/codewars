//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//Input is an array
//Output is an array
//declare outputArr
//declare oddNumbers
//loop thru array and push the odd numbers into oddNumbers array
//loop thru array again and for each odd number and use oddNumbers.shift to replace that number


function sortArray(array) {
    let oddNumbers = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            oddNumbers.push(array[i])
        }
    }
    oddNumbers = oddNumbers.sort((a,b) => a - b)
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            array.splice(i, 1, oddNumbers.shift())
        }
    }
    return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))//, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]))//, [1, 3, 5, 8, 0]);
console.log(sortArray([]))//,[]);