var app = function(){

  var rollBtn = document.getElementById('roll-dice')
  var counter = 0;
  rollBtn.addEventListener('click', function(){
    if (counter < 6) {
      showDiceRollNumber();
      counter++;
    }
  })
}

var showDiceRollNumber = function(){
  var results1 = document.getElementById('results1');
  var dice = new Dice();
  var diceRoll = dice.rollDice()
  var resultContainer = document.createElement('div')
  resultContainer.className = "flexer";
  for(var number of diceRoll) {
    var result = document.createElement('p');
    result.innerText = number;
    resultContainer.appendChild(result)
    results1.appendChild(resultContainer);
  }
}

var Dice = function(){
<<<<<<< HEAD
  var die = new Die();
  this.dice = [die, die, die, die, die];
  this.shipExist = false;
  this.captExist = false;
  this.crewExist = false;
  this.cargo = 0;
  this.numOfRolls = 0;
};

Dice.prototype.rollDice = function() {
  var gameArray = [];
  var diceResults = [];
  for(die of this.dice) {
    var result = die.roll();
    if (result === 6 && (this.shipExist !== true)) {
      gameArray.push(result);
      this.shipExist = true;
      this.dice.splice(result, 1);
    } else if (result === 5 && (this.shipExist) && (this.captExist !== true)) {
      gameArray.push(result);
      this.captExist = true;
      this.dice.splice(result, 1);

    } else if (result === 4 && (this.crewExist !== true) && (this.captExist) && (this.shipExist)) {
      gameArray.push(result);
      this.crewExist = true;
      this.dice.splice(result, 1);

    } else {
      diceResults.push(result);
    }
  }
  console.log(gameArray);
  // if (diceResults.length === 2) {
  //   console.log(diceResults.reduce)
  return diceResults.sort().reverse();
// }
=======
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
>>>>>>> c4cf9a3fcde1ba8a57235e7ee6b9c31c8925401e
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
