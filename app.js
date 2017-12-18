var app = function(){


  var rollBtn = document.getElementById('roll-dice')
  rollBtn.addEventListener('click', function(){
    rollDice();
  })

}

window.addEventListener('load', app)
