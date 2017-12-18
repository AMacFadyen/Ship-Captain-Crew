var assert = require("assert");
var Die = require("../Die.js");
var Dice = require("../Dice.js");

describe( "Dice Roll", function(){
  var dice;

  beforeEach(function(){
    dice = new Dice();
  });

  it("return 5 random numbers", function(){
    assert.strictEqual(dice.rollDice(), 12345);
  });
});

//BELOW IS UNREALTED TO TEST DICE
// if (this.currentRoll === 6 && !shipExist) {
//             shipExist = true;
//             this.isSelected = true;
//         }else
//         if (this.currentRoll === 5 && shipExist && !captExist ) {
//             captExist = true;
//             this.isSelected = true;
//         }else
//         if (this.currentRoll === 4 && shipExist && captExist && !crewExist) {
//             crewExist = true;
//             this.isSelected = true;
//         }
//         if(this.isSelected){
