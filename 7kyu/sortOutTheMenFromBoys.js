//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd!alt!alt
// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .!alt
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// Input >> Output Examples:
// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:
// Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

// Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

// menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
// Explanation:
// Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

// Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .

//Input is an array
//Output is an arrays
//Declare three new arrays, evenArr and oddArr 
//Loop to iterate through arr to check if the number is odd or even
//If the number is even and the arr does not already include the number, push to evenArr and if the number is odd, push to oddArr
//Sort the evenArr in ascending order and the oddArr in descending order 
//Use method to combine both arrays with evenArr coming first 



function menFromBoys(arr) {
  let evenArr = []
  let oddArr = []
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 && evenArr.includes(arr[i]) === false){
        evenArr.push(arr[i])
    }else if(arr[i] % 2 !== 0 && oddArr.includes(arr[i]) === false){
        oddArr.push(arr[i])
    }
  }
  evenArr.sort((a,b) => a - b)
  oddArr.sort((a,b) => b - a)
  return [...evenArr,...oddArr]
}

console.log(assert.deepEqual(menFromBoys([7, 3, 14, 17])))//, [14, 17, 7, 3])
