//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){ 
    name = name.split(" ")
    if(name.length > 2){  
        for(let i = 1; i < name.length - 1; i++){
            name.splice(i, 1, `${name[i][0].toUpperCase()}.`)
        }   
    }     
    return name.join(" ")
}

console.log(initializeNames('Jack Ryan'))//, 'Jack Ryan','');
console.log(initializeNames('Lois Mary Lane'))//, 'Lois M. Lane','');
console.log(initializeNames('Dimitri'))//, 'Dimitri','');
console.log(initializeNames('Alice Betty Catherine Davis'))//, 'Alice B. C. Davis','');