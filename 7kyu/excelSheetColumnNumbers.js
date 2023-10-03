//https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

// Write a function

// titleToNumber(title) or title_to_number(title) or titleToNb title ...

// (depending on the language)

// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:

// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27

function titleToNumber(title) {
    for (var n = 0, i = 0; i < title.length; i++) {
      n = 26 * n + title.charCodeAt(i) - 64
    }
    return n
  }

console.log(titleToNumber('A'))//,1);
console.log(titleToNumber('Z'))//,26);
console.log(titleToNumber('AA'))//,27);
console.log(titleToNumber('AZ'))//,52);
console.log(titleToNumber('BA'))//,53);
console.log(titleToNumber('CODEWARS'))//,28779382963);