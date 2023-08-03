//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits, return the first one in the array.

//Input is an array of numbers
//Output is a number
//forEach method to get the length of each element
//Math.max to find the highest number
//findIndex() to get the index of largest number
//return number

function findLongest(array){
    const str = array.map(x => x.toString())
    const lengthArr = str.map(x => x.length)
    const highestNum = Math.max(...lengthArr)
    return array[lengthArr.indexOf(highestNum)]
  }



console.log(findLongest([1, 10, 100]))//, 100)
// console.log(findLongest([9000, 8, 800]))//, 9000)
// console.log(findLongest([8, 900, 500]))//, 900)