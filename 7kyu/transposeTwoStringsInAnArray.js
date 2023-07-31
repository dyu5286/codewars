//https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

//Input is an array consisting of 2 strings
//Output is a string
//declare a newString
//loop that goes thru the strings in the array and takes the letters in order
//Conditional: if it is undefined, return ' '
//return the letters in order on separate lines by using \n 
//return newString


function transposeTwoStrings(array) {
  let newString = ''
  let numOfIterations = Math.max(array[0].length, array[1].length)
  for(let i=0; i < numOfIterations; i++){
    if(array[0][i] === undefined){
        newString += '  '+ array[1][i] + '\n'
    }else if (array[1][i] === undefined){
        newString += array[0][i] + '  ' + '\n'
    }else{
        newString += array[0][i] +' '+ array[1][i] + '\n'
    }
  } return newString.slice(0,-1)
}
console.log(transposeTwoStrings(['Hello', 'World']))

//console.log(['Hello', 'World'])//, 'H W\ne o\nl r\nl l\no d')
//console.log(['joey', 'louise'])//, 'j l\no o\ne u\ny i\n  s\n  e')
//console.log(['a', 'cat'])//, 'a c\n  a\n  t')
//console.log(['cat', ''])//, 'c  \na  \nt  ')
//console.log(['!a!a!', '?b?b'])//, '! ?\na b\n! ?\na b\n!  ')


//math.max(array[0].length, array[1].length)