//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//Input is a string
//Output is a boolean
//convert the string into an array of characters
//declare a variable letters to include all letters
//convert the string into all lowercase and split characters into an array and filter the string to include only letters
//a loop that iterates thru the letters array and checks to see if that element is included in the string array
//if it does include, then shift that character out of letters array.
//else return false

//return true


function isPangram(string){
  let letters = "abcdefghijklmnopqrstuvwxyz"
  string = string.toLowerCase().split("").filter(x => letters.includes(x))
  letters = letters.split("")
  
  for(let i = 0; i < letters.length; i++){
    if(!string.includes(letters[i])){
        return false
    }
  }
  return true
}


console.log(isPangram("This34 is not56!! a pangram."))//, false)
//console.log(isPangram("The quick brown fox jumps over the lazy dog."))//, true)