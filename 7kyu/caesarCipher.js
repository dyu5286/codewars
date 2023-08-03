// https://www.codewars.com/kata/54b594b6fab5e97c28000f3f/train/javascript

// In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

// Your task is to write a function that takes exactly 2 arguments (string, shiftkey) and encrypts the given string. Any other character than isn't a letter should stay unchanged.

// Assumption: shiftkey is integer from [-25, 25] interval.

// For example:

// caesar("Abcd", 2) should return "Cdef"
// caesar("message", -1) should return "ldrrzfd"
// caesar("ZZ Top", 3) should return "CC Wrs"
// and so on ...

//Input is a string and a number
//Output is a string
//declare a letters variable. let letters = "abcdefghijklmnopqrstuvwxyz"
//let capLetters = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
//declare newString
//a for loop that iterates thru string 
//check for caps
//find indexOf that letter in the letters variable
//if the shiftkey > indexOf , then shiftkey - indexOf , then return letter is letters [26-(shiftkey - indexOf)]
//if the shiftkey < indexOf, then indexOf - shiftkey
//concatenate newletter to newString
//and returns the letter SHIFTKEY numbers to the left of that letter and return that letter

//return newString

function caesarCode(string, shiftkey){
  let letters = "abcdefghijklmnopqrstuvwxyz"
  let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let newString = ""

  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      let capLetterIndex = capLetters.indexOf(string[i])
      if(shiftkey === 0){
        newString += string[i]
      }else if(shiftkey < 0 && Math.abs(shiftkey) > capLetterIndex){
        newString += capLetters[26-(Math.abs(shiftkey) - capLetterIndex)]
      }else if(shiftkey < 0 && Math.abs(shiftkey) < capLetterIndex){
        newString += capLetters[capLetterIndex -  Math.abs(shiftkey)]
      }else if(shiftkey > 0 && shiftkey + capLetterIndex > 25){
        newString += capLetters[(shiftkey + capLetterIndex) - 26]
      }else if(shiftkey > 0 && shiftkey + capLetterIndex <= 25){
        newString += capLetters[shiftkey + capLetterIndex]
      }
    }else if(string[i] !== string[i].toUpperCase()){
      let letterIndex = letters.indexOf(string[i])
      if(shiftkey === 0){
        newString += string[i]
      }else if(shiftkey < 0 && Math.abs(shiftkey) > letterIndex){
        newString += letters[26-(Math.abs(shiftkey) - letterIndex)]
      }else if(shiftkey < 0 && Math.abs(shiftkey) < letterIndex){
        newString += letters[letterIndex - Math.abs(shiftkey)]
      }else if(shiftkey > 0 && shiftkey + letterIndex > 25){
        newString += letters[(shiftkey + letterIndex) - 26]
      }else if(shiftkey > 0 && shiftkey + letterIndex <= 25){
        newString += letters[shiftkey + letterIndex]
      }
    }
  }
  return newString
}

//console.log(caesarCode('WEDnesday', -5))

//console.log("should test for something", function() {
      // Test.assertEquals(1 + 1, 2);
      // assert.strictEqual(1 + 1, 2);
    //});