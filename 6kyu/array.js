//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//Input is 2 arrays
//Output is array a
//start loop to take element of array b and scan thru a to look for that element
//start loop to inspect array a
//If the element in array b exists in a, take it out from array a
//If it doesnt, leave it alone
//return array a

function arrayDiff(a, b) {
    for(let i=0; i < b.length; i++){
        for(let k=0; k < a.length; k++){
            if(b[i] === a[k]){
                a.splice(k,1)
                k--;
            }
        }
    }return a
}

console.log(arrayDiff([1, 2], [1]), [2]) //, 'a was [1,2], b was [1]')
console.log(arrayDiff([1, 2, 2], [1]), [2, 2]) //, 'a was [1,2,2], b was [1]')
console.log(arrayDiff([1, 2, 2], [2]), [1]) //, 'a was [1,2,2], b was [2]')
console.log(arrayDiff([1, 2, 2], []), [1, 2, 2]) //, 'a was [1,2,2], b was []')
console.log(arrayDiff([], [1, 2]), []) //, 'a was [], b was [1,2]')
console.log(arrayDiff([1, 2, 3], [1, 2]), [3]) //,'a was [1,2,3], b was [1,2]')
