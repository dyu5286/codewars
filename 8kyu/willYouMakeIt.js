//https://www.codewars.com/kata/5861d28f124b35723e00005e/javascript

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out
//and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

//Considering these factors, write a function that tells you if it is possible to get to the pump or not.

//Function should return true if it is possible and false if not.

//Inputs are numbers
//Output is a boolean
//We need a function that takes the miles away and divides it by the 25 miles per gallon
//Conditional if the quotient is greater than or equal to 2, then return true. Else return false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump / mpg > fuelLeft) {
    return false
  } else {
    return true
  }
}

console.log(zeroFuel(50,25,2))//, true)
condole.log(zeroFuel(100, 50, 1)) //, false)
