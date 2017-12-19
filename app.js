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
    computerDiceRoll();
  });
}

var diceRoll = function() {
  var arr = [1, 2, 3, 4, 5, 6];
  counter=1;
  var resultsArray = [];
  for (var i = 0; i < 5; i++) {
    var isChecked = document.getElementById("hold"+counter).checked
    if(isChecked == false){
      var result = arr[Math.floor(Math.random() * arr.length)];
      resultsArray.push(result);
      resultsArray.sort();
      counter++;
    }
    var index = 1;

    var six = document.getElementById("hold5").checked;
    var five = document.getElementById("hold4").checked;
    var four = document.getElementById("hold3").checked;


    for (var number of resultsArray) {
      var sortedResult = document.getElementById("reel"+index).innerText = number;
      if (resultsArray[4] === 6 || (six) ) {
        document.getElementById("hold5").checked = true;
        if (resultsArray[3] === 5 || (five)) {
          document.getElementById("hold4").checked = true;
          if (resultsArray[2] === 4) {
            document.getElementById("hold3").checked = true;
            var btn = document.getElementById('reelroll');
            btn.disabled = true;
            var victory = document.getElementById('victory');
            victory.innerText = "Player wins!"
          }
        }
      }
      index++;
    }
  }
}


var computerDiceRoll = function() {
  var arr = [1, 2, 3, 4, 5, 6];
  counter=1;
  var resultsArray = [];
  for (var i = 0; i < 5; i++) {
    var isChecked = document.getElementById("cpu-hold"+counter).checked
    if(isChecked == false){
      var result = arr[Math.floor(Math.random() * arr.length)];
      resultsArray.push(result);
      resultsArray.sort();
      counter++;
    }
    var index = 1;

    var six = document.getElementById("cpu-hold5").checked;
    var five = document.getElementById("cpu-hold4").checked;
    var four = document.getElementById("cpu-hold3").checked;

    for (var number of resultsArray) {
      var sortedResult = document.getElementById("cpu-reel"+index).innerText = number;
      if (resultsArray[4] === 6 || (six) ) {
        document.getElementById("cpu-hold5").checked = true;
        if (resultsArray[3] === 5 || (five)) {
          document.getElementById("cpu-hold4").checked = true;
          if (resultsArray[2] === 4) {
            document.getElementById("cpu-hold3").checked = true;
            var btn = document.getElementById('reelroll');
            btn.disabled = true;
            var victory = document.getElementById('victory');
            victory.innerText = "Computer wins!"

          }
        }
      }
      index++;
    }
  }
}

window.addEventListener('load', app)
