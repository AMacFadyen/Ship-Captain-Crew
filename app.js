var app = function(){

  var rollBtn = document.getElementById('roll-dice')
  rollBtn.addEventListener('click', function(){
    showDiceRollNumber();
  })
}

var showDiceRollNumber = function(){
  var results1 = document.getElementById('results1');
  var results2 = document.getElementById('results2');
  var results3 = document.getElementById('results3');
  var dice = new Dice();
  var diceRoll = dice.rollDice()
  for(var number of diceRoll) {
    var result = document.createElement('p');
    result.innerText = number;
    results1.appendChild(result);
  }
}

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
    var diceResults = [];
    for(die of this.dice) {
        var result = die.roll();
        console.log(result)
        diceResults.push(result);
    };
    return diceResults;
};

var Die = function(){
  this.sides = 6
  this.banked = false;
};

Die.prototype.roll = function(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}


window.addEventListener('load', app)
