//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
//  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:
// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

// Bash Note:
// The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".

//Input is a string
//Output is a string
//let arr = split the string at "\n"
//for loop to iterate thru the arr and split each element
//for loopp to iterate thru arr and reverse : arr[i].reverse().join 
//return arr.join("\n")


function vertMirror(strng) {
    let arr = strng.split('\n')
    let splitArr = []
    for(let i = 0; i < arr.length; i++){
        splitArr.push(arr[i].split('').reverse().join(""))
        //arr[i].split('')//.reverse().join("")
    }
    return splitArr.join("\n")
}

//console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
// loop thru arr and reverse the order

function horMirror(strng) {
    let arr = strng.split("\n").reverse().join("\n")
    return arr
}

//console.log(horMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))

function oper(fct, s) {
    if (fct === "vertMirror"){
        vertMirror(s)
    }else if (fct === "horMirror"){
        horMirror(s)
    }
}


//console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
//console.log(horMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))

// console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))//, "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
// console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"))//, "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
// console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"))//, "yeCt\nCSbg\nJVhv\nlVHt");
// console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"))//, "cEYz\nLPKo\ndbrZ\nnjMK");
