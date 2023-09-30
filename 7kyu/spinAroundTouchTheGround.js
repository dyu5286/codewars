//https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript

// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".

function spinAround(turns) {
    let count = 0
    for(let i = 0; i < turns.length; i++){
        (turns[i] === "right") ? count ++ : count --
    }
    return Math.floor(Math.abs(count)/ 4)
}

console.log(spinAround(['left', 'right', 'left', 'right']))//, 0);
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))//, 2);
console.log(spinAround(['left', 'left', 'left', 'left']))//, 1);
console.log(spinAround([]))//, 0);
console.log(spinAround(['left']))//, 0);
console.log(spinAround(['right']))//, 0);
console.log(spinAround(['right', 'right', 'right', 'left', 'right', 'right']))//, 1);
console.log(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left','left', 'right', 'right']))//, 1);
console.log(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left','left', 'right']))//, 0);
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right','right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right','right', 'right', 'right', 'right', 'right', 'right']))//, 10);
console.log(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left','left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left','left', 'left']))//, 10);