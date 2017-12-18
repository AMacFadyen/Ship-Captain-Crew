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
    this.shipExists = false;
    this.captainExists = false;
    this.crewExists = false;
    this.cargo = 0;
    this.numOfRolls = 0;
};

Dice.prototype.rollDice = function() {
    var diceResults = [];
    var winningDiceRoll = 0;
    for(die of this.dice) {
        var result = die.roll();
        if (result === 6 && !shipExist){
            shipExist =true;
            winningDiceRoll += 1;
        }else
        if(result === 5 && shipExists && !captainExists){
            captainExists = true;
            winningDiceRoll +=1;
        }else
        if(result === 4 && shipExists && captainExists && !crewExists){
            crewExists = true;
            winningDiceRoll += 1;
        }

        .sort(function(a, b){return b - a});


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
