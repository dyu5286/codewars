//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

//Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of 
//symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

//Input is a string
//Output is boolean
//Make the string toLowercase
//Declare variable for newString 
//newString is the reverse of original string 
//If string is equal to newString, it is true
//return boolean



function isPalindrome(x) {
    x = x.toLowerCase()
    let newString = x.split("").reverse()
    if(x === newString.join("")){
        return true
    }else{
        return false
    }
  }

console.log(isPalindrome("a"))//, true
console.log(isPalindrome("aba"))//, true
console.log(isPalindrome("Abba"))//, true
console.log(isPalindrome("hello"))//, false
console.log(isPalindrome("Bob"))//, true
console.log(isPalindrome("Madam"))//, true
console.log(isPalindrome("AbBa"))//, true
console.log(isPalindrome(""))//, true