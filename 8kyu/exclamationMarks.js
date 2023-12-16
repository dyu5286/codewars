//https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let arr = s.split("")
    let vowels = "aeiouAEIOU"
    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            arr.splice(i, 1, "!")
        }
    }
    return arr.join("")
}

console.log(replace("Hi!"))// , "H!!")
console.log(replace("!Hi! Hi!"))// , "!H!! H!!")
console.log(replace("aeiou"))// , "!!!!!")
console.log(replace("ABCDE"))// , "!BCD!")