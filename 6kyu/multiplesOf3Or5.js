//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

//Input is a number
//Output is a number
//declare an arr variable as an array
//if number is negative, return 0
//if number is a multiple of BOTH 3 and 5 and under, push to arr
//conditionals to check if a number is multiple of 3 or 5 AND under number
//return arr.reduce((a,c) => a +c , 0)

function solution(number){
  let arr = []
  if(number < 0) return 0
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 && i % 5 === 0){
        arr.push(i)
    }else if(i % 3 === 0 || i % 5 === 0){
        arr.push(i)
    }
  }
  return arr.reduce((a,c) => a + c , 0)
}
