// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//conditional that increments for each letter
//return statement

function solve(s){
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let lowerCount = 0
    let upperCount = 0
    for(let i = 0; i < s.length; i++){
        (letters.includes(s[i])) ? lowerCount++ : upperCount++
    }
    
    return (lowerCount >= upperCount) ? s.toLowerCase() : s.toUpperCase()
}

Test.assertEquals(solve("code"),"code");
Test.assertEquals(solve("CODe"),"CODE");
Test.assertEquals(solve("COde"),"code");
Test.assertEquals(solve("Code"),"code");