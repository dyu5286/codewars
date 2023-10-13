//https://www.codewars.com/kata/56b12e3ad2387de332000041/train/javascript

// Task: Find the number couple with the greatest difference from a list of number-couples.

// Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").

// Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.

// Additional Information:

// All number couples will be given as strings.
// All numbers in the couples are positive integers.
// If multiple couples have the same greatest difference, return the first one encountered in the input list.
// If there is no difference (both numbers in a couple are equal), return False.

function diff(str){
    let arr = str.map(x => x.split("-")).map(x => Math.abs(x[0] - x[1]))
    return (arr.reduce((a,c) => a + c, 0) === 0) ? false : str[arr.indexOf(Math.max(...arr))]   
}

console.log(diff(['23-32','32-23','2-6','98-98','100-101']))//, '23-32');
console.log(diff(['22-22','56-56']))//, false);
console.log(diff(['52542-522','0-1000000']))//,'0-1000000');