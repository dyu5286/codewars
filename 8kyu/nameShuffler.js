//https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str) {
  str = str.split(" ");
  let outputStr = [];
  for (let i = 1; i >= 0; i--) {
    outputStr.push(str[i]);
  }
  return outputStr.join(" ");
}

console.log(nameShuffler("john McClane"))//, "McClane john");
console.log(nameShuffler("Mary jeggins"))//, "jeggins Mary");
console.log(nameShuffler("tom jerry"))//, "jerry tom");