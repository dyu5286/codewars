//https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript

// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

//Input is an array 
//Output is an array
//let n = 2 with a while loop(n < fraction[1])

function reduce(fraction) {
    let n = 2
    let max = Math.max(...fraction)
    while(n < max){
        if(fraction[0] % n === 0 && fraction[1] % n === 0){
            fraction[0] = fraction[0]/n
            fraction[1] = fraction[1]/n
        }else{
            n++
        }
    }
    return fraction
}

console.log(reduce([60, 20]))//, [3, 1]],
console.log(reduce([80, 120]))//, [2, 3]],
console.log(reduce([4, 2]))//, [2, 1]],
console.log(reduce([45, 120]))//, [3, 8]],
console.log(reduce([1000, 1]))//, [1000, 1]],
console.log(reduce([15, 5]))//, [1, 1]],