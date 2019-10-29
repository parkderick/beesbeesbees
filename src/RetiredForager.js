var RetiredForagerBee = function() {
  ForagerBee.call(this, 40, 'gamble', false, 'grey')
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function (treasure) {
  return 'I am too old, let me play cards instead'
}
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
}
