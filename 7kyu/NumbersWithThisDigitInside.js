//https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

//Input is 2 number
//Output is an array
//Loop that iterates from 1 to x and find all numbers that have the digit d in them
//put these numbers into an array, nums
//declare three variables, count, sum and product
//return these variables in am array

function numbersWithDigitInside(x, d) {
    let nums = []
    let result = []
    for(let i = 1; i <= x; i++){
        i.toString().split("").includes(d.toString()) ? nums.push(i) : null
    }
    let count = nums.length
    let sum = nums.reduce((a,c) => a + c, 0)
    let product = nums.reduce((a,c) => a * c, 1)

    return nums.length === 0 ? [0, 0, 0] : [count, sum, product]
}

console.log(numbersWithDigitInside(5,6))//, [ 0, 0, 0 ]);
console.log(numbersWithDigitInside(1,0))//, [ 0, 0, 0 ]);
console.log(numbersWithDigitInside(7,6))//, [ 1, 6, 6 ]);
console.log(numbersWithDigitInside(11,1))//, [ 3, 22, 110 ]);
console.log(numbersWithDigitInside(20,0))//, [ 2, 30, 200 ]);
console.log(numbersWithDigitInside(44,4))//, [ 9, 286, 5955146588160 ]);