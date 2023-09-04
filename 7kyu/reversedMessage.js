// https://www.codewars.com/kata/5a0efbb7c374cb69970000cf

// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

//Input is a string
//Output is a string
//split the str between each space
//loop that does thru the array and lowercases and reverses word
//Capitalise the first letter of each word 
//join and return

const reverseMessage = str => str.toLowerCase().split('').reverse().join('').split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')

function reverseMessage(str) {
    newArr =[]
    arr = []
    outputArr= []
    if(str.length === 0){ 
        return ''
    }else{
        str = str.split(" ").reverse()
        for(let i = 0; i < str.length; i++){
            newArr.push(str[i].toLowerCase())
        }
        for(let i = 0; i < newArr.length; i++){
            arr.push(newArr[i].split("").reverse().join(""))
        }
        for(let i = 0; i < newArr.length; i++){
            outputArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
    }
    return outputArr.join(" ")
}

console.log(reverseMessage(''))//,'Aaaaa')
console.log(reverseMessage('Hello there'))//,'Ereht Olleh')
console.log(reverseMessage('Pl34k78j'))//, 'J87k43lp')
console.log(reverseMessage('Reverse this message!'))//,'!egassem Siht Esrever')
console.log(reverseMessage('Today is the 14th of January!'))//,'!yraunaj Fo Ht41 Eht Si Yadot')
console.log(reverseMessage('hty56hA T76#Td'))//,'Dt#67t Ah65yth')
console.log(reverseMessage(''))//,'')