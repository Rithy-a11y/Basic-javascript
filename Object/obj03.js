function Umbrella(color, isOpen = false) {
  this.color = color;
  this.isOpen = isOpen;
}

Umbrella.prototype.open = function() {
  if (this.isOpen === true) {
    return "umbrella is already open";
  } else {
    this.isOpen = true;
    return "julia open umbrella";
  }
};

var umbrella = new Umbrella("pink");

console.log(umbrella.color);
console.log(umbrella.isOpen);
console.log(umbrella.open());
console.log(umbrella.open());

var umbrella01 = new Umbrella("purple");

console.log(umbrella01.color);
console.log(umbrella01.isOpen);
console.log(umbrella01.open());
