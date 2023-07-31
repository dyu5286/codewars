//https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af

// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

// x representing fire
// Y representing buildings.
// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

// Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

// Note: all inputs will be valid.

// Examples
// "xxYxx" and w = 3      -->  2 waterbombs needed
// "xxYxx" and w = 1      -->  4
// "xxxxYxYx" and w = 5   -->  3
// "xxxxxYxYx" and w = 2  -->  5


//Input is a string and a number
//Output is a number
//fire parameter is a string. 
//Split the fire into separate string by the Y
//Loop thru the array.For each new string, Math.ceil(new string.length / w) will give us the waterbomb count
//Add all waterbomb counts
//return total

 function waterbombs(fire, w) {
   let fireArray = fire.split('Y')
   let total = 0
    for(let i=0; i < fireArray.length; i++){
        total += Math.ceil(fireArray[i].length / w)
    }return total
 } 


 console.log(assert.strictEqual(waterbombs('xxxxYxYx', 4)))//, 3)
 console.log(assert.strictEqual(waterbombs('xxYxx', 3)))//, 2)
 console.log(assert.strictEqual(waterbombs('Y', 4)))//, 0)
 console.log(assert.strictEqual(waterbombs('xx', 1)))//, 2)
 console.log(assert.strictEqual(waterbombs('xxYxx', 3)))//, 2)
 console.log(assert.strictEqual(waterbombs('xxxYx', 1)))//, 4)
 console.log(assert.strictEqual(waterbombs('xxxxYxYx', 4)))//, 3)
 console.log(assert.strictEqual(waterbombs('xxxxxYxYx', 2)))//, 5)