//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//Input is a string
//Output is a sting
//for loop that takes the string length and if the character is cc.length -4 , then leave as is
//if the character index is less than cc.length -4, splice to "#"

function maskify(cc) {
    cc = cc.split("")
    for(let i = 0; i < cc.length; i++){
        (i < cc.length -4) ? cc.splice(i, 1, "#") : null
    }
    return cc.join("")
}

console.log(maskify('4556364607935616'))//, '############5616');
console.log(maskify('1'))//, '1');
console.log(maskify('11111'))//, '#1111');