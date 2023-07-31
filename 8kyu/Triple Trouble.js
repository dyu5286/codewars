//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them 
//next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

//Input is 3 strings
//Output is a string
//Declare a new variable newString
//Loop through the three strings 
//for each iteration, take one letter from each string through the length of the strings
//Combine them into the newString
//return newString


function tripleTrouble(one, two, three){
    let newString = ""
    for(let i=0; i < one.length; i++){
        newString += one[i] 
        newString += two[i]
        newString += three[i]
    }
    return newString
}

console.log(tripleTrouble("aaa","bbb","ccc")) //, "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"))//, "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"))//, "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"))//, "Supermans"); 
console.log(tripleTrouble("LLh","euo","xtr"))//, "LexLuthor");