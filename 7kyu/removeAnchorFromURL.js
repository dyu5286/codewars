//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Input is a string
//Output is a string
//Split the string and return arr[0]

function removeUrlAnchor(url){
    let arr = url.split("#")
    return arr[0]
  }

console.log(removeUrlAnchor('www.codewars.com#about'))//, 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))//, 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'))//, 'www.codewars.com/katas/')
  