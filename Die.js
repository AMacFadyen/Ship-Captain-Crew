var Die = function(){
    this.banked = false;
};

Die.prototype.roll = function () {
    var rand = Math.floor(Math.random() * 6);
    return rand;
};

module.exports = Die;
