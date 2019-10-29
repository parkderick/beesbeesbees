var ForagerBee = function(age = 10, job ='find pollen', canFly = true, color = 'yellow') {
  Bee.call(this, age, job, color);
  this.canFly = canFly;
  this.treasureChest = [];
}
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
}