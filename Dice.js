var Die = require("./Die.js");

var Dice = function(){
  var die = new Die();
  this.dice = [die, die, die, die, die];
  this.shipExist = false;
  this.captExist = false;
  this.crewExist = false;
  this.cargo = 0;
  this.numOfRolls = 0;
};

Dice.prototype.rollDice = function() {
<<<<<<< HEAD
  var diceResults = [];
  for(die of this.dice) {
    var result = die.roll();
    diceResults.push(result);
  };
  return diceResults;
=======
    var diceResults = [];
    for(die of this.dice) {
        var result = die.roll();
        // console.log(result)
        diceResults.push(result);
        console.log(diceResults);
        this.numOfRolls += 1;

    };
    diceResults = diceResults.sort((a, b) => b - a);
    return diceResults;
>>>>>>> c4cf9a3fcde1ba8a57235e7ee6b9c31c8925401e
};

module.exports = Dice;
