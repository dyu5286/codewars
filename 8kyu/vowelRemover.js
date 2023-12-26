//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    let arr = string.split("")
    let vowels = "aeiou"
    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            arr.splice(i, 1)
            i--
        }
    }
    return arr.join("")
}