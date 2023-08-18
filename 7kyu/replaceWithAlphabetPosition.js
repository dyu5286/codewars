//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//Input is a string
//Output is a string
//for loop to iterate thru text
//declare variable letters to include all letters
//declare variable for outputString
//go thru loop and find the letters position in the letters variable +1
//Concatenate the letters position +1 to the outputString and return

function alphabetPosition(text) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let outputString = ''
    text = text.toLowerCase()
    for(let i = 0; i < text.length; i++){
        if(letters.includes(text[i])){
            outputString += (letters.indexOf(text[i]) + 1) + " "
        }
    } 
    return outputString.substring(0, outputString.length -1)
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."))//, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");