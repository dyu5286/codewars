//https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

//Input is a string
//Output is a string
//declare a variable, vowels
//loopthru the parameter with a conditional
//conditional: if vowels.includes(str[i]), then str.replace(str[i], i +1)
//return str

function vowel2index(str) {
    let vowels = 'aeiouAEIOU'
    let strArr = str.split("")
    for(let i = 0; i < strArr.length; i++){
        vowels.includes(strArr[i]) ? strArr.splice(i, 1, String(i + 1)) : ""
    }
    return strArr.join("")
 }


//console.log(vowel2index('this is my string'))//,'th3s 6s my str15ng');
// console.log(vowel2index('Codewars is the best site in the world'))//,'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
console.log(vowel2index('Tomorrow is going to be raining'))//, 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
// console.log(vowel2index(''))//, '');