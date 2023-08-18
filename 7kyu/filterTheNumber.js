//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
//Input is a string
//Output is a string
//declare outputString
//declare numbers = '0123456789'
//Loop to iterate thru value and check if the element is a number
//If it is a number, push to outputString
//return outputStr as a number

var filterString = function(value) {
    let outputStr = ''
    let numbers = '1234567890'
    for(let i = 0; i < value.length; i++){
        if(numbers.includes(value[i])){
            outputStr += value[i]
        }
    }
    return Number(outputStr)
}

console.log(filterString("123"))//, 123, `For the input "123"`);
console.log(filterString("a1b2c3"))//, 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"))//, 123, `For the input "aa1bb2cc3dd"`);