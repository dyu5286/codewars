//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain <numerals className="
"></numerals>
*/

//Inputs are strings
//Output is a boolean
//Split the arguments so that they become an array instead of a string
//Conditionals comparing the first and last letters of the two arguments
//Conditional: if the first letters of both arguments are equal AND the last letters are equal, return true
//Esle, return false

function feast(beast, dish) {
  let beastArry = beast.split('')
  let dishArry = dish.split('')
  if (
    beastArry[0] === dishArry[0] &&
    beastArry[beastArry.length - 1] === dishArry[dishArry.length - 1]
  ) {
    return true
  } else {
    return false
  }
}

console.log(feast('great blue heron', 'garlic naan')) //, true)
console.log(feast('chickadee', 'chocolate cake')) //, true)
console.log(feast('brown bear', 'bear claw')) //, false)
