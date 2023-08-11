//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

//Input is a string and 2 numbers
//Output is a string
//We are given 2 fighters with a starting health and damagePerAttack
//Also given fighter that attacks first
//while loop for when fighter1.health > 0 && fighter2.health > 0
//

function declareWinner(fighter1, fighter2, firstAttacker) {
    let f1Health = fighter1.health
    let f2Health = fighter2.health
    let f1Damage = fighter1.damagePerAttack
    let f2Damage = fighter2.damagePerAttack

    while(f1Health > 0 && f2Health > 0){
        if(firstAttacker === fighter1.name){
            f2Health -= f1Damage
            if(f2Health <= 0) return fighter1.name
            f1Health -= f2Damage
            if(f1Health <= 0) return fighter2.name  
        }else if(firstAttacker === fighter2.name){
            f1Health -= f2Damage
            if(f1Health <= 0) return fighter2.name
            f2Health -= f1Damage
            if(f2Health <= 0) return fighter1.name
            
        }
    }
  }


  
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))//, "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"))//, "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))//, "Harald")
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"))//, "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"))//, "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"))//, "Harald")