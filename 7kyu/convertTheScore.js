//https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript

// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"
  
// "two two"
  
// "Arsenal just conceded another goal, two nil"
// Note:

// Please return an array

function scoreboard(string) {
    let nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "nil"]
    let outputNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let score = []
    string = string.split(" ")
    for(let i = 0; i < string.length; i++){
        (nums.includes(string[i])) ? score.push(outputNum[nums.indexOf(string[i])]) : null
    }
    return score
}

console.log(scoreboard("The score is four nil"))//, [4,0], "Should return: [4,0]");
console.log(scoreboard("new score: two three"))//, [2,3], "Should return: [2,3]");
console.log(scoreboard("two two"))//, [2,2], "Should return: [2,2]");
console.log(scoreboard("Arsenal just conceded another goal, two nil"))//, [2,0], "Should return: [2,0]");