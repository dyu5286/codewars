//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string) {
    string = string.split(" ");
    let outputArr = [];
    for (let i = string.length - 1; i >= 0; i--) {
        outputArr.push(string[i]);
    }
    return outputArr.join(" ");
}

console.log(reverse("I am an expert at this"))//,"this at expert an am I");
console.log(reverse("This is so easy"))//, "easy so is This");
console.log(reverse("no one cares"))//, "cares one no");
console.log(reverse(""))//, "");
console.log(reverse("CodeWars"))//, "CodeWars");