//https://www.codewars.com/kata/5902f1839b8e720287000028/train/javascript

// Task
// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

// Calculate the parameter of the given number n.

// Input/Output
// [input] integer n

// A positive integer. It is guaranteed that no zero appears in n.

// [output] an integer

// The parameter of the given number.

// Example
// For n = 22, the output should be 4.

// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

// For n = 1234, the output should be 120.

// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120

//Input is a number
//Output is a number
//calculate sum of its digits
//calculate the product of its digits
//for loop until i = sum * product
//if (i%sum === 0 && i%product ===0) return i

function parameter(n) {
    let numArr = n.toString().split("").map(Number)
    const sum = numArr.reduce((a,c) => a + c , 0)
    const product = numArr.reduce((a,c) => a * c , 1)
    
    let i = 1;
    while (i) {
      if (i%sum === 0 && i%product ===0) return i
      i++
    }
    
    // for(let i = 1; i <= sum * product; i++){
    //     if (i%sum === 0 && i%product ===0) return i
    // }
}

console.log(parameter(22))//,4)
console.log(parameter(1234))//,120)
console.log(parameter(123))//,6)
console.log(parameter(11))//,2)
console.log(parameter(239))//,378)
console.log(parameter(999999999))//,387420489)
console.log(parameter(91))//,90)
console.log(parameter(344))//,528)
console.log(parameter(123456789))//,362880)