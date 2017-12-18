var assert = require("assert");
var Die = require("../Die.js");


describe( "Die Roll", function(){
  var die;

  beforeEach(function(){
    die = new Die();
  });

  it("return 5 random numbers", function(){
    assert.strictEqual(die.roll(), 4);
  });
});
