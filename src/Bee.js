var Bee = function (age = 5, job = 'keep on growing', color = 'yellow') {
  Grub.call(this, age, color);
  this.job = job;
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
