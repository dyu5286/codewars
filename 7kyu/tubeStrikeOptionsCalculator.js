//https://www.codewars.com/kata/568ade64cfd7a55d9300003e

// Tube strike options calculator
// The sweaty bus ride
// There is a tube strike today so instead of getting the London Underground home you have decided to take the bus. It's a hot day and you have been sitting on the bus for over an hour, but the bus is hardly moving. Your arm is sticking to the window and sweat drips off your nose as you try to read your neighbour's book when you say to yourself, "This is ridiculous. I could have walked faster than this!" Suddenly you have an idea for an app that helps people decide whether to walk or take the bus home when the London Underground is on strike.
// You rush home (relatively speaking) and begin to define the function that will underpin your app.

// Function specification
// You must create a function which takes three parameters; walking distance home, distance the bus must travel, and the combined distance of walking from the office to the bus stop and from the bus stop to your house. All distances are in kilometres.
// So for example, if your home is 5km away by foot, and the bus that takes you home travels 6km, but you have to walk 500 metres to the bus stop to catch it and 500 metres to your house once the bus arrives (i.e. 1km in total), which is faster, walking or taking the bus?

// Example - Which of these is faster?:

// Start---Walk 5km--->End
// Start---Walk 500m---Bus 6km---Walk 500m--->End
// Walking speed and bus driving speed have been given to you as two pre-loaded variables ($global_variables in Ruby).

// walk = 5 (km/hr) bus = 8 (km/hr)

// The function must return the fastest option, either "Walk" or "Bus". If the walk is going to be over 2 hours, the function should recommend that you take the bus. If the walk is going to be under 10 minutes, the function should recommend that you walk. If both options are going to take the same amount of time, the function should recommend that you walk

//Input is three numbers
//Output is a string
//Declare 2 variables: totalWalkTime , totalBusTime
//totalWalkTime = distance / 300minutes
//totalBusTime = (busWalk*2)/300 minutes + busDrive/480 minutes
//Conditionals comparing totalWalkTime and totalBusTime
//If totalWalkTime > totalBusTime or is is over 120 minutes  then Bus
//If totalWalkTime <= totalBusTime or is under 10 mins then Walk
//return outputString


function calculator(distance, busDrive, busWalk) {
  let totalWalkTime = (distance / 5) *60
  let totalBusTime = (busWalk/5) * 60 + (busDrive/8) * 60

  if(totalWalkTime < 10){
    return 'Walk'
  }else if(totalWalkTime > 120){
    return 'Bus'
  }else if(totalWalkTime <= totalBusTime){
    return 'Walk'
  }else if(totalWalkTime > totalBusTime){
    return 'Bus'
  }
}



console.log(calculator(5, 6, 1))//,"Bus","The bus should win this time!");
console.log(calculator(4, 5, 1))//,"Walk","Come on, you can walk this!");
console.log(calculator(5, 8, 0))//,"Walk","If the time is exactly the time, you should walk!");
console.log(calculator(5, 4, 3))//,"Walk","There's no point taking the bus if it drops you in the middle of nowhere!");
console.log(calculator(11, 15, 2))//,"Bus","Don't be crazy! You'll destroy your lovely shoes!");
console.log(calculator(0.6, 0.4, 0))//,"Walk","Wow. Seriously? How lazy are you?");
console.log(calculator(10, 0.4, 0))//,"Bus","You wouldn't want to walk in this case!");

