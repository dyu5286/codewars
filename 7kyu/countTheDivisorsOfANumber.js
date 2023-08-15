//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
//Input is a number
//Output is a number
//create an arr that includes 1 to n
//declare divArr=[]
//loop through arr and add a conditional
//if n % arr[i] === 0, divArr.push(arr[i])
//return divArr.length


function getDivisorsCnt(n){
    const arr = Array.from({length: n}, (_, index) => index + 1);
    let divArr = []
    
    for(let i = 0; i < arr.length; i++){
        if(n % arr[i] === 0){
            divArr.push(arr[i])
        } 
    }
    return divArr.length
}

// console.log(getDivisorsCnt(1))//,  1);
// console.log(getDivisorsCnt(10))//, 4);
// console.log(getDivisorsCnt(11))//, 2);
console.log(getDivisorsCnt(0))//, 8);