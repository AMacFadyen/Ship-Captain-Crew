var assert = require("assert");
var Die = require("../Die.js");
var Dice = require("../Dice.js");


describe( "Dice Roll", function(){

  // var die1;
  // var die2;
  // var die3;
  // var die4;
  // var die5;

  var dice;

  beforeEach(function(){
    dice = new Dice();
  });

  it("return 5 random numbers", function(){
    assert.strictEqual(dice.rollDice(), 12345);
  });
});
