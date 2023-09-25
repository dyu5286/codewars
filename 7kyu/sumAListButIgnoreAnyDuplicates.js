//https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

//Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    const checkDuplicateInArray=(input_array)=>{
        const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
        return Array.from(new Set(duplicates));
    }
    
    return removeDuplicates(numList).reduce((a,b) => a + b, 0) - checkDuplicateInArray(numList).reduce((a,b) => a + b, 0)
}


console.log(sumNoDuplicates([1, 1, 2, 3]))//, 5],
console.log(sumNoDuplicates([]))//, 0],
console.log(sumNoDuplicates([1, 1, 2, 2, 3]))//, 3],
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]))//, 21],
console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]))//, 31],
console.log(sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]))//, 15],