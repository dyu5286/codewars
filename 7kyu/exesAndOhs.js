//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Input is a str
//Output is a boolean
//filter out the str for only x and o after changing everything to lowercase
//declare a varialbe xCount and oCount
//loop thru the sting and add to corresponding count
//if counts are equal return true else false

function XO(str) {
    let xCount = 0
    let oCount = 0
    str = str.toLowerCase().split("").filter(letter => ( letter === "x" || letter === "o") ).forEach(ele => (ele === "x") ? xCount++ : oCount++)
    return (xCount === oCount) ? true : false
}

console.log(XO('xo'))//,true);
console.log(XO("xxOo"))//,true);
console.log(XO("xxxm"))//,false);
console.log(XO("Oo"))//,false);
console.log(XO("ooom"))//,false);