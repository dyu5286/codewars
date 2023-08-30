//https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


//Input is 2 strings
//output is a string
//declare an output string, str
//conditional for if title is an empty string
//else, convert all elements of title string to lowercase
//we need a loop that iterates thru the title and checks to see if the word is inlcuded in minorWords
//if it is, then we need to make the word all lowercaps, unless it is the first word in the title
//if it not the first word but is in mniorWords, then convert everthing to lowercase 
//if it is not in minorWords, convert to lowercase except the first letter
//return str

function titleCase(title, minorWords) {
    let str = ""
    const lower = t => t.split(" ").map(x => x.toLowerCase())
    
    if (title.length === 0){ 
        return ""
    }else if (minorWords === undefined){
        title = lower(title) 
        title.forEach(x => str += x[0].toUpperCase() + x.slice(1).toLowerCase() + " ")
    }else{
        title = lower(title)
        minorWords = lower(minorWords)
        str += title[0][0].toUpperCase() + title[0].slice(1).toLowerCase() + " "
        for(let i = 1; i < title.length; i++){
            if(minorWords.includes(title[i])){
                str += title[i] + " "
            }else{
                str += title[i][0].toUpperCase() + title[i].slice(1).toLowerCase() + " "
            }
        }
    }
    return str.substring(0, str.length -1)
}

console.log(titleCase(''))//, '')
console.log(titleCase('a clash of KINGS', 'a an the of'))//, 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))//, 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'))//, 'The Quick Brown Fox')