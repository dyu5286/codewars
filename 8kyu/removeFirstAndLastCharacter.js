//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
    let arr = string.split(",")
    console.log(arr)
    if(arr.length < 3){
      return null
    }else{
      arr.pop()
      arr.shift()
      return arr.join(" ")
      }
}

console.log('')//, null);
console.log('1')//, null);
console.log('A1,B2')//, null);
console.log('1,2,3')//, '2');
console.log('1,2,3,4')//, '2 3');
console.log('A1,B2,C3,D4,E5')//, 'B2 C3 D4');
console.log('A,1,23,456,78,9,Z')//, '1 23 456 78 9');