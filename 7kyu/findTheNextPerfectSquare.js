//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//Input is a number
//Output is a number
//conditional: if sqrt(sq) === Math.floor(sqrt(sq)), then return Math.pow(sqrt(sq) + 1, 2)
//else return -1

function findNextSquare(sq) {
    if(Math.sqrt(sq) === Math.floor(Math.sqrt(sq))){
        return Math.pow(Math.sqrt(sq) + 1, 2)
    }else{
        return -1
    }
  }

  console.log(findNextSquare(121))//, 144, "Wrong output for 121");
  console.log(findNextSquare(625))//, 676, "Wrong output for 625");
  console.log(findNextSquare(319225))//, 320356, "Wrong output for 319225");
  console.log(findNextSquare(15241383936))//, 15241630849, "Wrong output for 15241383936");  