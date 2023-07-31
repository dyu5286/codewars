//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Input is a string
//Ouput is a string
//Use replaceAll() to replace exclamation marks with ''
//return newString

function removeExclamationMarks(s) {
  return s.replaceAll('!', '')
}

console.log(removeExclamationMarks("Hello World!"))//, "Hello World"