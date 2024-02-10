//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(!letters.includes(a.toLowerCase()) || !letters.includes(b.toLowerCase())){
        return -1
    }else if((letters.includes(a) && letters.includes(b)) || (upperletters.includes(a) && upperletters.includes(b))){
        return 1
    }else{
        return 0
    }
}