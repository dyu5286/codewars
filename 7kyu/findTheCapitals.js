//https://www.codewars.com/kata/539ee3b6757843632d00026b

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//Input is a string
//Output is an array
//declare outputArray
//Loop that iterates thru the string
//Conditional: if the character === character.toUpperCase(), then the letter is uppercase
//If conditional is true, return the index of that character into Output Array
//return outputArray

var capitals = function (word) {
  let outputArray =[]
  for(let i=0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase()){
        outputArray.push(i)
    }
  } return outputArray
}

console.log(capitals('CodEWaRs'))//, [0, 3, 4, 6])