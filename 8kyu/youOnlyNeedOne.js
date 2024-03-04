//https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript

// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
    const result = a.filter(b => b===x)
    return (result.length >= 1) ? true: false
}

console.log(check([66, 101], 66))//, true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))//, true);
console.log(check(["t", "e", "s", "t"], "e"))//, true);
console.log(check(["what", "a", "great", "kata"], "kat"))//, false);