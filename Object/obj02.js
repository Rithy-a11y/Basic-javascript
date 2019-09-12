var umbrella = {};

umbrella.color = "pink";

umbrella.isOpen = false;

umbrella.open = function() {
  if (umbrella.isOpen === true) {
    return "umbrella is already open";
  } else {
    umbrella.isOpen = true;
    return "julia open umbrella";
  }
};

console.log(umbrella.isOpen);
console.log(umbrella.open());
console.log(umbrella.open());