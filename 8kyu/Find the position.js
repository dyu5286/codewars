// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

// Find the position

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// Input is a string
// Output is also a string

// Put input letter through the loop.
// Create alphabet variable string
// if the char matches the letter, we want to grab the index 
// create output string
// return the output string


function position(letter){ //a
    
// Create alphabet variable string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// Put input letter through the loop.
    for (let i = 0; i < alphabet.length; i++){
// if the char matches the letter, we want to grab the index 
        if (letter === alphabet[i]){ //if a = i, 
// return the output string
            return `Position of alphabet: ${i+1}`
        }
    }


}