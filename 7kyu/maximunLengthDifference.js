//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

//Input is 2 arrays consisting of strings
//Output is a number as a string
//If a1 or a2 is empty, return "-1"
//Make two new arrays, a1length and a2length using map
//a1longest = Math.max(...a1length)
//a1shortest = Math.min(...a1length)
//a2longest =Math.max(...a2length)
//a2shortest = Math.min(...a2length)
//difference1  = a1longest - a2shortest
//difference2 = a1shortest - a2longest
//if difference1 > difference2, return String(difference1)
//else return String(difference2)


function mxdiflg(a1, a2) {
    let a1length = a1.map(x => x.length)
    let a2length = a2.map(x => x.length)
    let a1longest = Math.max(...a1length)
    let a1shortest = Math.min(...a1length)
    let a2longest = Math.max(...a2length)
    let a2shortest = Math.min(...a2length)
    let difference1  = Math.abs(a1longest - a2shortest)
    let difference2 = Math.abs(a1shortest - a2longest)

    if(a1.length === 0 || a2.length === 0 ){
        return -1
    }else if(difference2 >= difference1){
        return difference2
    }else if(difference1 > difference2){
        return difference1
    }
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz",];
var s2 = [];
console.log(mxdiflg(s1, s2))//, 13);