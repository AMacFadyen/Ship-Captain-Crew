var app = function(){

  // var rollBtn = document.getElementById('roll-dice')
  // var counter = 0;
  // rollBtn.addEventListener('click', function(){
  //   if (counter < 6) {
  //     showDiceRollNumber();
  //     counter++;
  //   }
  // })

  var btn = document.getElementById('reelroll');
  btn.addEventListener('click', function(){
    diceRoll();
  });
}

var diceRoll = function() {
  var arr = [1, 2, 3, 4, 5, 6];
  if(document.getElementById("hold1").checked == false){
    document.getElementById("reel1").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  } else {
    document.getElementById("hold1").disabled = true;
  }

  if(document.getElementById("hold2").checked == false){
    document.getElementById("reel2").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  } else {
    document.getElementById("hold2").disabled = true;
  }

  if(document.getElementById("hold3").checked == false){
    document.getElementById("reel3").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  } else {
    document.getElementById("hold3").disabled = true;
  }

  if(document.getElementById("hold4").checked == false){
    document.getElementById("reel4").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  } else {
    document.getElementById("hold4").disabled = true;
  }

  if(document.getElementById("hold5").checked == false){
    document.getElementById("reel5").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  } else {
    document.getElementById("hold5").disabled = true;
  }

}
//
// var showDiceRollNumber = function(){
//   var results1 = document.getElementById('results1');
//   var dice = new Dice();
//   var diceRoll = dice.rollDice()
//   var resultContainer = document.createElement('div')
//   resultContainer.className = "flexer";
//   for(var number of diceRoll) {
//     var result = document.createElement('p');
//     result.innerText = number;
//     resultContainer.appendChild(result)
//     results1.appendChild(resultContainer);
//   }
// }
//
// var Dice = function(){
//
//   this.dice = [];
//   this.shipExist = false;
//   this.captExist = false;
//   this.crewExist = false;
//   this.cargo = 0;
//   this.numOfRolls = 0;
// };
//
// Dice.prototype.rollDice = function() {
//   var die = new Die();
//   var myDice = [die, die, die, die, die];
//
//   var gameArray = [];
//   var diceResults = [];
//   var winningDice = 1;
//   for(var i = 0; i < myDice.length; i++){
//     var result = myDice[i].roll();
//     if (result === 6 && (this.shipExist !== true)) {
//       gameArray.push(result);
//       this.shipExist = true;
//       myDice.splice(0, winningDice)
//     } else if (result === 5 && (this.shipExist) && (this.captExist !== true)) {
//       gameArray.push(result);
//       this.captExist = true;
//       myDice.splice(0, winningDice)
//     } else if (result === 4 && (this.crewExist !== true) && (this.captExist) && (this.shipExist)) {
//       gameArray.push(result);
//       this.crewExist = true;
//       myDice.splice(0, winningDice)
//     } else {
//       diceResults.push(result);
//     }
//     console.log(myDice.length)
//   }
//   return diceResults.sort();
// };
//
//
// var Die = function(){
//   this.sides = 6
//   this.banked = false;
// };
//
// Die.prototype.roll = function(){
//   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//   return randomNumber;
// }
//
//
window.addEventListener('load', app)
