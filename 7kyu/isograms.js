//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//Input is a string
//Output is a boolean
//Letter Case does not matter so start with str.toLowerCase()
//Sort the letters from a to z
//Loop with a conditional. if the letter is the same as the one right after it, return false
//

function isIsogram(str){
    const newStr = str.toLowerCase().split("").sort().join("")
    for(i = 0; i < newStr.length; i++){
      if(newStr[i] === newStr[i + 1]){
        return false
      }
    }
    return true
}


console.log(isIsogram("Dermatoglyphics"))//, true );
console.log(isIsogram("isogram"))//, true );
console.log(isIsogram("aba"))//, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse"))//, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram"))//, false );
console.log(isIsogram(""))//, true, "an empty string is a valid isogram" );  