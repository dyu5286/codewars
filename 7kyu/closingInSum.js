//https://www.codewars.com/kata/65126d52a5de2b11c94096d2/train/javascript

// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

// Worked Example
// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72
// Examples
// 121 ➞ 13
// # 11 + 2

// 1039 ➞ 22
// # 19 + 3

// 22225555 ➞ 100
// # 25 + 25 + 25 + 25
// Notes
// If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
// Any number which is zero-padded counts as a single digit (see example #2).

function closingInSum(n) {
    let outputArr = []
    n = n.toString().split("")

    while(n.length > 0)
        if(n.length > 1){
            outputArr.push(n.shift() + n.pop())
        }else if(n.length = 1){
            outputArr.push(n.shift())
        }

    return outputArr.map(Number).reduce((a,c) => a + c, 0)
}

console.log(closingInSum(121))//, 13);
console.log(closingInSum(1039))//, 22);
console.log(closingInSum(22225555))//, 100);
console.log(closingInSum(2520))//, 72);
console.log(closingInSum(5332824166496569))//, 331);
console.log(closingInSum(1979672314137318116))//, 485);
console.log(closingInSum(1795459644013947776))//, 548);
console.log(closingInSum(2801980378842185820))//, 426);
console.log(closingInSum(3440584288422776554))//, 430);
console.log(closingInSum(1985124000275401986))//, 342);