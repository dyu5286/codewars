//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    if(nbPetals === 1 || nbPetals % 6 === 1){
        return "I love you"
    }else if(nbPetals === 2 || nbPetals % 6 === 2){
        return "a little"
    }else if(nbPetals === 3 || nbPetals % 6 === 3){
        return "a lot"
    }else if(nbPetals === 4 || nbPetals % 6 === 4){
        return "passionately"
    }else if(nbPetals === 5 || nbPetals % 6 === 5){
        return "madly"
    }else if(nbPetals === 6 || nbPetals % 6 === 0){
        return "not at all"
    }
}

console.log(howMuchILoveYou(7))//,"I love you")
console.log(howMuchILoveYou(3))//,"a lot")
console.log(howMuchILoveYou(6))//,"not at all")