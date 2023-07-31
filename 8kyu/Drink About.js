//https://www.codewars.com/kata/56170e844da7c6f647000063

// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//Input is a number
//Output is a string
//We want to use the age parameter in a conditional to determine the output
//Return output


function peopleWithAgeDrink(old) {
    if(old < 14){
        return "drink toddy"
    }else if(old < 18){
        return "drink coke"
    }else if(old < 21){
        return "drink beer"        
    }else if(old >= 21){
        return "drink whisky"
    }
  };


(peopleWithAgeDrink(22))//, 'drink whisky');