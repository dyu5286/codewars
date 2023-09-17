//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    s = s.split("")
    let output1 = []
    let output2 = []
    for(let i = 0; i < s.length; i++){
        (i % 2 === 0 || i === 0 ) ? output1.push(s[i].toUpperCase()) : output1.push(s[i])
    }

    for(let i = 0; i < s.length; i++){
        (i % 2 === 0 || i === 0 ) ? output2.push(s[i]) : output2.push(s[i].toUpperCase())
    }

    return [output1.join(""), output2.join("")]
};

console.log(capitalize("abcdef"))//,['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"))//,['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"))//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"))//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);