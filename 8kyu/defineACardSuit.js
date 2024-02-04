//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    if(card.includes(♣)){
        return "clubs"
    }else if(card.includes(♦)){
        return "diamonds"
    }else if(card.includes(♥)){
        return "hearts"
    }else(card.includes(♠)){
        return "spades"
    }
}

console.log(defineSuit("Q♠"))//, "spades"));
console.log(defineSuit("9♦"))//, "diamonds"));
console.log(defineSuit("J♥"))//, "hearts"));