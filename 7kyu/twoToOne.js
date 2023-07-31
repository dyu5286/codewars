//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Input is a string
//Output is a string
//Declare a combinedString and outputString
//Join the two string, a and b, to combinedString
//Loop thru the combinedString and add a conditional
//Conditional: if !outputString.includes(combinedString[i]), then push combinedString[i]
//Sort outputString
//return outputString

function longest(s1, s2) {
  let combinedString = s1 + s2
  let outputString = []
  combinedString.split("")
  for (let i = 0; i < combinedString.length; i++){
    if(!outputString.includes(combinedString[i])){
        outputString.push(combinedString[i])
    }
  }
  return outputString.sort().join("")
}
