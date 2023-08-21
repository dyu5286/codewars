//https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

//Input is a number (amount of handshakes)
//Output is a number (minimum number of ppl)
//declare maxHandShakes as a function with parameter n
//there has to be at least 2 ppl for 1 handshake
//maxHandShakes for a given number of ppl, n,  is n-1 + n-2 +...
//let num = 0
//for(let i = n-1 ; i >= 2; i--)
//num += i
//return num

//loop with a conditional that checks to see if maxHandShakes is greater than handshakes
//if it is, return that number i


function getParticipants(handshakes){   
    for(let i = 0; i <= handshakes * 2 ; i++){
        if(MaxHandShakes(i) >= handshakes) return i
    }
    
function MaxHandShakes(n){
    let num = 0
    if(n >= 2){
        for(let i = n-1 ; i >= 1; i--){
            num += i
        }
        return num
    }else {
        return 0
    }    
}
}

console.log(getParticipants(0))//, 0, "0 handshakes")
 console.log(getParticipants(2))//, 2, "1 handshake")
console.log(getParticipants(3))//, 3, "3 handshakes")
console.log(getParticipants(6))//, 4, "6 handshakes")
console.log(getParticipants(7))//, 5, "7 handshakes")