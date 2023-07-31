//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

//Input is an integer
//Output is an integer
//Convert integer into a string
//Declare new variable, newNumStr =""
//Loop thru all digits in the number and square them
//Concatenate all the new numbers together
//Convert newNumStr into an integer using parseInt()
//Return newNumStr

function squareDigits(num){
    let numStr = num.toString()
    let newNumStr = ""
    for(let i=0; i < numStr.length; i++){
        let currentDigit = numStr[i]
        let square = parseInt(currentDigit) * parseInt(currentDigit)
        newNumStr += square.toString()
    }  
    return parseInt(newNumStr)
}


console.log(squareDigits(3212))//, 9414);
console.log(squareDigits(2112))//, 4114);
console.log(squareDigits(0)) //, 0);
