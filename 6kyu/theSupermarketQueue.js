//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

//Input is an array and a number
//Output is a number (math.max)
//Conditionals for edge cases 
//if there are no customers
//if there is just one lane
//if there are more lanes than customers
//Loop that iterates thru the customers array
//Find the index of the lowest number of newArr 
//Take the first element of customers and add it to the number of that index


function queueTime(customers, n) {
    if(customers.length === 0){
        return 0
    }else if(n === 1){
        return customers.reduce((a,c) => a + c, 0)
    }else if(n >= customers.length){
        return Math.max(...customers)
    }else{
        let newArr = customers.splice(0, n)
        for(let i = 0; i < customers.length; i++){
            newArr.splice(newArr.indexOf(Math.min(...newArr)), 1, Math.min(...newArr) + customers[i])
        }
        return Math.max(...newArr)
    }
}

console.log(queueTime([], 1))//, 0);
console.log(queueTime([1,2,3,4], 1))//, 10);
console.log(queueTime([2,2,3,3,4,4], 2))//, 9);
console.log(queueTime([1,2,3,4,5], 100))//, 5);
console.log(queueTime([5,3,4],    1))//, 12);
console.log(queueTime([10,2,3,3], 2))//, 10);
console.log(queueTime([2,3,10,2], 2))//, 12);