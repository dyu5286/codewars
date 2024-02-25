//https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

console.log(setAlarm(true, true))//, false, "Should be false.");
console.log(setAlarm(false, true))//, false, "Should be false.");
console.log(setAlarm(true, false))//, true, "Should be true.");