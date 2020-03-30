var Bee = function() {
  //call bee to inherit properties from grub
  Grub.call(this);
  //reassign age
  this.age = 5;
  //reassign color
  this.color = "yellow";
  this.job = "keep on growing";
};




Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

