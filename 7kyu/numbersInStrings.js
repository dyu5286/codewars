//https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

function solve(s) {
    s = s.split("")
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])){
            s.splice(i, 1, 'x')
        }
    }
    return Math.max(...s.join("").split("x").map(Number))
};

console.log(solve('gh12cdy695m1'))//, 695);
console.log(solve('2ti9iei7qhr5'))//,   9);
console.log(solve('vih61w8oohj5'))//,  61);
console.log(solve('f7g42g16hcu5'))//,  42);
console.log(solve( 'lu1j8qbbb85'))//,  85);